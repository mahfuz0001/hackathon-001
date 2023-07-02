import { useEffect, useRef, useState } from 'react';
import equipmentData from '../../constant/listOfEquipment.json';

type Equipment = {
  name: string;
  description: string;
};

const Equipment: React.FC = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(
    null
  );
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleClick = (equipment: Equipment) => {
    setSelectedEquipment(equipment);
  };

  const handleClear = () => {
    setSelectedEquipment(null);
  };

  useEffect(() => {
    // Scroll to the details section when a body part is selected
    if (selectedEquipment) {
      detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedEquipment]);

  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='mb-4 text-3xl font-bold'>Equipments</h2>
      <h3 className='mb-8 text-lg text-gray-600'>
        Explore the different equipment used in training for various body parts.
      </h3>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 '>
        {equipmentData.map((equipment: Equipment) => (
          <button
            key={equipment.name}
            className='flex h-12 items-center justify-center rounded bg-gray-200 font-medium text-gray-800'
            onClick={() => handleClick(equipment)}
          >
            {equipment.name}
          </button>
        ))}
      </div>
      <div ref={detailsRef}></div>
      {selectedEquipment && (
        <div className='mt-8 rounded-md bg-gray-100 p-6'>
          <h3 className='mb-4 text-2xl font-bold'>{selectedEquipment.name}</h3>
          <p className='text-gray-800'>{selectedEquipment.description}</p>
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

export default Equipment;
