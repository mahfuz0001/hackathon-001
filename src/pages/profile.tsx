import { useState } from 'react';
import Navbar from '../app/components/Navbar';
import axios from 'axios';
import Footer from '../app/components/Footer';

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
  });
  const [healthInfo, setHealthInfo] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post('/api/profile', profile);
      const { healthInfo } = response.data;

      setHealthInfo(healthInfo);
    } catch (error) {
      console.error('API request error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Engage in regular exercise', completed: false },
    { id: 2, text: 'Follow a balanced diet', completed: false },
    { id: 3, text: 'Stay hydrated', completed: false },
    { id: 4, text: 'Get sufficient sleep', completed: false },
    { id: 5, text: 'Manage stress', completed: false },
    { id: 6, text: 'Limit alcohol consumption', completed: false },
    { id: 7, text: 'Avoid smoking or tobacco use', completed: false },
    { id: 8, text: 'Practice good hygiene', completed: false },
    { id: 9, text: 'Take regular breaks from sitting', completed: false },
    { id: 10, text: 'Practice mindfulness or meditation', completed: false },
  ]);

  const handleToggle = (id: number) => {
    setChecklist((prevChecklist) =>
      prevChecklist.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <>
      <div className='container mx-auto items-center px-4 py-8'>
        <h2 className='mb-4 text-3xl font-bold'>Profile Page</h2>
        <div className='flex'>
          <form onSubmit={handleSubmit} className='mr-8'>
            <div className='mb-4'>
              <label className='mb-2 block font-bold'>Name</label>
              <input
                type='text'
                name='name'
                value={profile.name}
                onChange={handleChange}
                className='w-full rounded-lg border border-gray-300 px-4 py-2'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='mb-2 block font-bold'>Age</label>
              <input
                type='text'
                name='age'
                value={profile.age}
                onChange={handleChange}
                className='w-full rounded-lg border border-gray-300 px-4 py-2'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='mb-2 block font-bold'>Height</label>
              <input
                type='text'
                name='height'
                value={profile.height}
                onChange={handleChange}
                className='w-full rounded-lg border border-gray-300 px-4 py-2'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='mb-2 block font-bold'>Weight</label>
              <input
                type='text'
                name='weight'
                value={profile.weight}
                onChange={handleChange}
                className='w-full rounded-lg border border-gray-300 px-4 py-2'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='mb-2 block font-bold'>Gender</label>
              <input
                type='text'
                name='gender'
                value={profile.gender}
                onChange={handleChange}
                className='w-full rounded-lg border border-gray-300 px-4 py-2'
                required
              />
            </div>

            <button
              type='submit'
              className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600'
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Submit'}
            </button>
          </form>
          <div className='rounded-md bg-gray-100 p-6'>
            <h3 className='mb-4 text-2xl font-bold'>Health Information:</h3>
            {healthInfo ? (
              <p className='text-gray-800'>{healthInfo}</p>
            ) : (
              <p className='text-gray-400'>
                No health information available yet.
              </p>
            )}
          </div>
        </div>
        <div className='mt-4'>
          <h4 className='mb-2 text-xl font-bold'>Checklist</h4>
          <div className='grid grid-cols-2 gap-2'>
            {checklist.map((item) => (
              <button
                key={item.id}
                className={`flex items-center ${
                  item.completed ? 'text-green-500' : 'text-gray-800'
                }`}
                onClick={() => handleToggle(item.id)}
              >
                <span
                  className={`mr-2 ${
                    item.completed
                      ? 'flex h-4 w-4 items-center justify-center rounded-full bg-green-500'
                      : 'flex h-4 w-4 items-center justify-center rounded-full border border-gray-500'
                  }`}
                >
                  {item.completed && (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className='h-3 w-3 text-white'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  )}
                </span>
                <span>{item.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
