import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';

type Exercise = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

const ExerciseDetails: React.FC = () => {
  const router = useRouter();
  const { exerciseId } = router.query;
  const [exercise, setExercise] = useState<Exercise | null>(null);

  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const response = await axios.get('/api/exercises');
        const exercises: Exercise[] = response.data;
        const exercise = exercises.find((ex) => ex.id === exerciseId);
        setExercise(exercise || null);
      } catch (error) {
        console.error('Error fetching exercise:', error);
      }
    };

    if (exerciseId) {
      fetchExercise();
    }
  }, [exerciseId]);

  if (!exercise) {
    return <p className='text-center text-red-500'>Exercise not found.</p>;
  }

  return (
    <>
      <Navbar />
      <div className='container mx-auto px-4 py-8'>
        <div className='mx-auto max-w-lg'>
          <h2 className='mb-4 text-3xl font-bold'>{exercise.name}</h2>
          <p className='mb-2'>Body Part: {exercise.bodyPart}</p>
          <p className='mb-2'>Equipment: {exercise.equipment}</p>
          <p className='mb-2'>Target: {exercise.target}</p>
          <div className='mt-6'>
            <img
              src={exercise.gifUrl}
              alt={exercise.name}
              className='w-full rounded-lg'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseDetails;
