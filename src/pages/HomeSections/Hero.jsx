import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

function Hero() {
  return (
    <section className="hero bg-neutral-50 border-b border-neutral-200 py-12 px-4 flex flex-col items-center gap-6 md:gap-10 md:py-24 md:px-6">
      <div className="flex flex-col gap-4 md:gap-10 w-full max-w-6xl">
        <h1 className="text-blue-800 text-4xl md:text-6xl lg:text-7xl text-center leading-tight font-light">
          Stay on Track with Every Dose
        </h1>

        <h3 className="text-blue-600 text-lg md:text-2xl lg:text-3xl text-center font-medium max-w-4xl mx-auto leading-relaxed">
          Easily manage your medications, set smart reminders, and take control of your health—stress-free.
        </h3>
      </div>

      <Link to='/medications' className="mt-4 md:mt-0">
        <Button 
          variant='primary' 
          className="px-6 py-3 text-lg md:px-8 md:py-4 md:text-xl w-full"
        >
          Get Started
        </Button>
      </Link>
    </section>
  );
}

export default Hero;
