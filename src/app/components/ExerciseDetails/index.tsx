import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import DetailsHero from './DetailsHero';
import Footer from '../../components/Footer';

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
      <DetailsHero exercise={exercise} />
      <Footer />
    </>
  );
};

export default ExerciseDetails;
