import React from 'react';
import Navbar from './_components/Navbar';
import Footer from './_components/Footer';

const MarketingLayout = ({ children }) => {
  return (
    <div className='min-h-svh bg-slate-100'>
      <Navbar />
      <main className='pt-28 pb-16 bg-slate-100'>{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
