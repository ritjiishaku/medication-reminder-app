import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-16 p-4 py-24 bg-neutral-50 border-b border-neutral200'>

      <div className='flex flex-col gap-8 items-center justify-center'>
        <h2 className='text-blue-700 text-medium text-5xl text-center'>Why Choose Us?</h2>
        <div className="border-b-8 border-blue-700 w-64"></div>
      </div>

      <div className='flex gap-6 flex-wrap '>

        <div className='flex flex-col justify-center gap-2 p-6 flex-1 min-w-md mx-auto rounded-xl shadow bg-neutral-50'>
          <h5 className='text-2xl font-bold text-center text-blue-900 leading-3xl'>Easy Medication Tracking</h5>
          <p className='font-regular text-neutral-700 text-center text-1g'>Add and manage your medications in seconds.</p>
        </div>

        <div className='flex flex-col justify-center gap-2 p-6 flex-1 min-w-md mx-auto rounded-xl shadow bg-neutral-50'>
          <h5 className='text-2xl font-bold text-center text-blue-900 leading-3xl'>Easy Medication Tracking</h5>
          <p className='font-regular text-neutral-700 text-center text-1g'>Add and manage your medications in seconds.</p>
        </div>

        <div className='flex flex-col justify-center gap-2 p-6 flex-1 min-w-md mx-auto rounded-xl shadow bg-neutral-50'>
          <h5 className='text-2xl font-bold text-center text-blue-900 leading-3xl'>Easy Medication Tracking</h5>
          <p className='font-regular text-neutral-700 text-center text-1g'>Add and manage your medications in seconds.</p>
        </div>

      </div>
      
    </section>
  )
}

export default WhyChooseUs
