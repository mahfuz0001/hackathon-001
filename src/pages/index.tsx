import * as React from 'react';

import Layout from '../app/layout/Layout';
import Seo from '../app/Seo';
import Hero from '../app/components/Hero';
import Exercises from '../app/components/Exercises';
import Equipment from '../app/components/Equiepment';
import BodyParts from '../app/components/BodyParts';
import Muscles from '../app/components/Muscles';
import Footer from '../app/components/Footer';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <Seo />

      <main className='bg-white'>
        <section className=''>
          <Hero />
          <Exercises />
          <Equipment />
          <BodyParts />
          <Muscles />
        </section>
      </main>
    </Layout>
  );
}
