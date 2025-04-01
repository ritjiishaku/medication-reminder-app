import React from 'react';
import { FaPills, FaBell, FaHeartbeat } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-neutral-50 border-b border-neutral-200 py-12 px-4 md:py-24 flex flex-col items-center gap-8 md:gap-16">
      <div className="flex flex-col items-center gap-4 md:gap-8 max-w-4xl mx-auto">
        <h2 className="text-blue-700 font-medium text-2xl md:text-4xl lg:text-5xl text-center">
          Why Choose MedRemind?
        </h2>
        <div className="border-b-4 md:border-b-8 border-blue-700 w-32 md:w-64"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center gap-4 hover:shadow-lg transition-shadow">
          <FaPills className="text-blue-700 text-6xl" />
          <h5 className="text-blue-900 text-xl md:text-2xl font-bold text-center">
            Manage Your Medications with Ease
          </h5>
          <p className="text-neutral-700 text-base md:text-lg text-center">
            Keep all your medications in one organized place. Easily add, edit, and track your prescriptions so you never feel overwhelmed or forget an important dose.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center gap-4 hover:shadow-lg transition-shadow">
          <FaBell className="text-blue-700 text-6xl" />
          <h5 className="text-blue-900 text-xl md:text-2xl font-bold text-center">
            Get Reminders, Stay on Track
          </h5>
          <p className="text-neutral-700 text-base md:text-lg text-center">
            Life gets busy, but your health should never take a backseat. Set up personalized reminders to take your medications on time, every time—no more missed doses.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center gap-4 hover:shadow-lg transition-shadow">
          <FaHeartbeat className="text-blue-700 text-6xl" />
          <h5 className="text-blue-900 text-xl md:text-2xl font-bold text-center">
            Gain Insights into Your Health
          </h5>
          <p className="text-neutral-700 text-base md:text-lg text-center">
            Understand your medication history, track your progress, and recognize patterns in your health—helping you make better, more informed decisions every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
