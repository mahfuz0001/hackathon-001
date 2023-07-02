import { useState } from 'react';
import axios from 'axios';
import Navbar from '../app/components/Navbar';
import Button from '../app/components/buttons/Button';
import Footer from '../app/components/Footer';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send the email
      await axios.post('/api/send-email', { name, email, message });
      setSuccess(true);
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <>
      <div className='container mx-auto px-4 py-8'>
        <h2 className='mb-4 text-center text-3xl font-bold'>Contact Us</h2>
        {success ? (
          <div className='text-center text-green-500'>
            <p className='mb-4 text-2xl'>Email sent successfully!</p>
            <Button variant='primary' className='text-xl'>
              Go Back Home
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='mx-auto max-w-lg'>
            <div className='mb-4'>
              <label htmlFor='name' className='mb-1 block font-medium'>
                Name
              </label>
              <input
                type='text'
                id='name'
                className='w-full rounded border border-gray-300 px-3 py-2'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='mb-1 block font-medium'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full rounded border border-gray-300 px-3 py-2'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='mb-1 block font-medium'>
                Message
              </label>
              <textarea
                id='message'
                className='w-full rounded border border-gray-300 px-3 py-2'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type='submit'
              className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600'
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Contact;
