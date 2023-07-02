import { useState, useRef, useEffect } from 'react';
import bodyPartsData from '../../constant/listOfBodyParts.json';

type BodyPart = {
  name: string;
  description: string;
};

const BodyParts: React.FC = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState<BodyPart | null>(
    null
  );
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleClick = (bodyPart: BodyPart) => {
    setSelectedBodyPart(bodyPart);
  };

  const handleClear = () => {
    setSelectedBodyPart(null);
  };

  useEffect(() => {
    // Scroll to the details section when a body part is selected
    if (selectedBodyPart) {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedBodyPart]);

  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='mb-4 text-3xl font-bold'>Body Parts</h2>
      <h3 className='mb-6 text-lg text-gray-600'>
        Explore the key body parts essential for effective training.
      </h3>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
        {bodyPartsData.map((bodyPart: BodyPart) => (
          <button
            key={bodyPart.name}
            className='flex h-12 items-center justify-center rounded bg-gray-200 font-medium text-gray-800'
            onClick={() => handleClick(bodyPart)}
          >
            {bodyPart.name}
          </button>
        ))}
      </div>
      <div ref={detailsRef}></div>
      {selectedBodyPart && (
        <div className='mt-8 rounded-md bg-gray-100 p-6'>
          <h3 className='mb-4 text-2xl font-bold'>{selectedBodyPart.name}</h3>
          <p className='text-gray-800'>{selectedBodyPart.description}</p>
          <button
            className='mt-6 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none'
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default BodyParts;
