import Image from 'next/image';
import React from 'react';

type Exercise = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
};

type Props = {
  exercise: Exercise;
};

const DetailsHero = ({ exercise }: Props) => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mx-auto max-w-lg'>
        <h2 className='mb-4 text-3xl font-bold'>{exercise.name}</h2>
        <p className='mb-2'>Body Part: {exercise.bodyPart}</p>
        <p className='mb-2'>Equipment: {exercise.equipment}</p>
        <p className='mb-2'>Target: {exercise.target}</p>
        <div className='mt-6'>
          <Image
            src={exercise.gifUrl}
            alt={exercise.name}
            className='w-full rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsHero;
