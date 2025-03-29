import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const CTA = () => {
  return (
    <section className="border-b bg-neutral-50 py-12 px-4 flex flex-col items-center justify-center gap-8 md:gap-16 md:py-24 md:px-8">
      <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
        <h2 className="text-blue-700 font-medium text-3xl text-center md:text-4xl lg:text-5xl leading-tight">
          Ready to Take Control of Your Health?
        </h2>
        <div className="border-b-4 border-blue-700 w-32 md:w-64 md:border-b-8"></div>
      </div>

      <Link 
        to="/medications" 
        className="w-full max-w-xs md:w-auto md:max-w-none"
      >
        <Button 
          variant="primary" 
          className="w-full py-3 text-base md:py-2 md:text-lg"
        >
          Track Your Medication Today!
        </Button>
      </Link>
    </section>
  );
};

export default CTA;