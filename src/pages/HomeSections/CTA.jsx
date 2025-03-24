import React from 'react'
import { Link } from 'react-router'
import Button from '../../components/Button'

const CTA = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-16 py-24  px-8 border-b bg-neutral-50'>

      <div className='flex flex-col gap-8 items-center justify-center'>
        <h2 className='text-blue-700 text-medium text-5xl text-center'>Ready to Take Control of Your Health?</h2>
        <div className="border-b-8 border-blue-700 w-64"></div>
      </div>

      <Link to='/medications'><Button variant='primary'>Track Your Medication Today!</Button></Link>

    </section>
  )
}

export default CTA
