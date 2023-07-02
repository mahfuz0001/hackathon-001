import Navbar from '../../app/components/Navbar';
import Footer from '../../app/components/Footer';
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
