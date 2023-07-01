import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

type Exercise = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

const Exercises = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get('/api/exercises');
        setExercises(response.data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <div className='container mx-auto px-8 py-16'>
      <h2 className='mb-10 mt-10 text-center text-4xl font-bold'>Exercises</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {exercises.slice(0, 16).map((exercise) => (
          <Link
            href={`/exercise/${exercise.id}`}
            key={exercise.id}
            className='flex flex-col rounded bg-white p-4 shadow-xl'
          >
            <h3 className='mb-2 text-xl font-bold'>{exercise.name}</h3>
            <p className='mb-2'>Body Part: {exercise.bodyPart}</p>
            <p className='mb-2'>Equipment: {exercise.equipment}</p>
            <p className='mb-2'>Target: {exercise.target}</p>
            <img
              className='w-full rounded'
              src={exercise.gifUrl}
              alt={exercise.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
