import Navbar from '../../components/Navbar';
import ButtonLink from '../../components/links/ButtonLink';
import PrimaryLink from '../../components/links/PrimaryLink';
import Image from 'next/image';
import React from 'react';

type Props = {};

const Hero: React.FC<Props> = (props) => {
  return (
    <div>
      <div className='mt-14 h-auto w-full'>
        <div className='container mx-auto flex flex-col md:flex-row'>
          <div className='md:w-1/2'>
            <div className='hero__image'>
              <Image
                src='/images/gigachad.png'
                alt='hero image'
                width={450}
                height={100}
                className='mx-auto'
              />
            </div>
          </div>
          <div className='flex flex-col justify-center px-8 py-12 md:w-1/2'>
            <h1 className='mb-4 text-4xl font-bold'>
              Find, Watch and do Exercise Quickly and Easily!
            </h1>
            <p className='mb-8 text-lg'>
              Learn gymnastics from the comfort of your home
            </p>
            <ButtonLink
              href='/profile'
              variant='primary'
              className='w-40 text-lg font-medium'
            >
              Get Started
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
