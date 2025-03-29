import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="bg-neutral-50 border-b border-neutral-200 py-12 px-4 md:py-24 flex flex-col items-center gap-8 md:gap-16">
      <div className="flex flex-col items-center gap-4 md:gap-8 max-w-4xl mx-auto">
        <h2 className="text-blue-700 font-medium text-3xl md:text-4xl lg:text-5xl text-center">
          Why Choose Us?
        </h2>
        <div className="border-b-4 md:border-b-8 border-blue-700 w-32 md:w-64"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 hover:shadow-lg transition-shadow">
          <h5 className="text-blue-900 text-xl md:text-2xl font-bold text-center">
            Easy Medication Tracking
          </h5>
          <p className="text-neutral-700 text-base md:text-lg text-center">
            Add and manage your medications in seconds.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 hover:shadow-lg transition-shadow">
          <h5 className="text-blue-900 text-xl md:text-2xl font-bold text-center">
            Smart Reminders
          </h5>
          <p className="text-neutral-700 text-base md:text-lg text-center">
            Never miss a dose with customizable alerts.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 hover:shadow-lg transition-shadow">
          <h5 className="text-blue-900 text-xl md:text-2xl font-bold text-center">
            Health Insights
          </h5>
          <p className="text-neutral-700 text-base md:text-lg text-center">
            Track your progress and health trends.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;