import React from 'react';
import { Link } from 'react-router';
import Button from '../../components/Button';

function Hero() {
  return (
    <section className="hero flex flex-col items-center gap-10 px-6 py-24 bg-neutral-50 border-b border-neutral200">

      <div className="flex flex-col gap-10 w-full">

        <h1 className="text-blue-800 text-8xl text-center">
          Never Miss a Dose Again!
        </h1>

        <h3 className="text-blue-600 text-4xl text-center font-medium-heading-3">
          Track your medications, set reminders, and stay on top of your health
          with ease.
        </h3>

      </div>

      <Link to='/medications'><Button variant='primary'>Get Started</Button></Link>

    </section>
  );
}

export default Hero;