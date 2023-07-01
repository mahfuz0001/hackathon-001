import { NextApiRequest, NextApiResponse } from 'next';
import exercisesData from './exerciseData.json';

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(exercisesData);
}
