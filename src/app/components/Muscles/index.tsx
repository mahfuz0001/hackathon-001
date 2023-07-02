import { useEffect, useRef, useState } from 'react';
import muscleData from '../../constant/listOfTargetMuscle.json';

type Muscle = {
  name: string;
  description: string;
};

const Muscles: React.FC = () => {
  const [selectedMuscle, setSelectedMuscle] = useState<Muscle | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleClick = (muscle: Muscle) => {
    setSelectedMuscle(muscle);
  };

  const handleClear = () => {
    setSelectedMuscle(null);
  };

  useEffect(() => {
    // Scroll to the details section when a body part is selected
    if (selectedMuscle) {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedMuscle]);

  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='mb-4 text-3xl font-bold'>Muscles</h2>
      <h3 className='mb-8 text-lg text-gray-600'>
        Explore different muscles and their descriptions.
      </h3>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
        {muscleData.map((muscle: Muscle) => (
          <button
            key={muscle.name}
            className='flex h-12 items-center justify-center rounded bg-gray-200 font-medium text-gray-800'
            onClick={() => handleClick(muscle)}
          >
            {muscle.name}
          </button>
        ))}
      </div>
      <div ref={detailsRef}></div>
      {selectedMuscle && (
        <div className='mt-4'>
          <h3 className='text-xl font-bold'>{selectedMuscle.name}</h3>
          <p className='mt-2'>{selectedMuscle.description}</p>
          <button
            className='mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600'
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default Muscles;
