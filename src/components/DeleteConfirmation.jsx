import React from 'react'
import Button from './Button'

const DeleteConfirmation = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 '>
      <h2 className='text-center font-bold text-orange-700'>
        Are you sure you want to delete this medication?
      </h2>

      <Button variant='accent'>Delet Medication</Button>
    </div>
  )
}

export default DeleteConfirmation
