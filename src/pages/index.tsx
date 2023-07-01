import * as React from 'react';

import Layout from '../components/layout/Layout';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Exercises from '../components/Exercises';
import Equipment from '../components/Equiepment';
import BodyParts from '../components/BodyParts';
import Muscles from '../components/Muscles';
import Footer from '../components/Footer';

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
          <Footer />
        </section>
      </main>
    </Layout>
  );
}
