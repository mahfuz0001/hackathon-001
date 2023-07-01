import { NextApiRequest, NextApiResponse } from 'next';
import {
  Configuration,
  OpenAIApi,
  CreateChatCompletionRequest,
  ChatCompletionRequestMessage,
} from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { name, age, height, weight, gender } = req.body;

  const prompt = `As a health coach, you assist users in maintaining a healthy body by providing guidance based on their input. You offer workout suggestions, advice on healthy foods and diets, and assess their body's health. Additionally, you extract their BMI and BMR to further evaluate their fitness level.

Please provide me with the following details:

Name: ${name}
Age: ${age}
Height: ${height}
Weight: ${weight}
Gender: ${gender}`;

  const messages: ChatCompletionRequestMessage[] = [
    { role: 'system', content: prompt },
    {
      role: 'user',
      content:
        'tell me about my health and suggest what I should do to maintain a healthy body. keep it as minimal as possible',
    },
  ];
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0,
    });

    const { choices } = response.data;
    let healthInfo = '';

    if (choices && choices.length > 0) {
      const assistantMessages = choices
        .map((choice: any) => choice.message?.content)
        .filter(Boolean);
      healthInfo = assistantMessages.join('\n');
    }

    res.status(200).json({ healthInfo });
  } catch (error) {
    console.error('OpenAI API request error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
