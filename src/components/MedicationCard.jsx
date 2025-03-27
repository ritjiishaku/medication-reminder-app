import React from 'react';
import Button from './Button';

const MedicationCard = ({ 
  medication = {
    id: '',
    name: '',
    dosage: '',
    time: '',
    timeFormat: '',
    status: 'Pending',
    reminder: false,
    frequency: ''
  },
  onToggleReminder = () => {},
  onEdit = () => {},
  onDelete = () => {}
}) => {
  
  console.log('Medication data received:', medication);

  return (
    <div className='w-full max-w-[400px] bg-neutral-200 shadow-md p-4 rounded-lg'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-start justify-between w-full'>
          <div className='flex flex-col gap-2'>
            
            <h2 className='text-blue-700 text-xl font-bold'>
              {medication.name || 'Medication Name'}
            </h2>

            <div className='flex flex-col gap-1'>
              <div className='flex items-center gap-2'>
                <span className='text-neutral-800 text-sm font-medium'>Dosage:</span>
                <span className='text-neutral-800 text-sm font-medium'>
                  {medication.dosage || 'Not specified'}
                </span>
              </div>

              <div className='flex items-center gap-2'>
                <span className='text-neutral-800 text-sm font-medium'>Time:</span>
                <span className='text-neutral-800 text-sm font-medium'>
                  {medication.time || '--:--'} 
                </span>
                {medication.timeFormat && (
                  <span className='text-neutral-800 text-[10px] font-medium'>
                    {medication.timeFormat}
                  </span>
                )}
              </div>

              {medication.frequency && (
                <div className='flex items-center gap-2'>
                  <span className='text-neutral-800 text-sm font-medium'>Frequency:</span>
                  <span className='text-neutral-800 text-sm font-medium'>
                    {medication.frequency}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <span className='text-blue-500 text-base font-medium'>Status:</span>
            <span className={`text-sm ${medication.status === 'Missed' ? 'text-red-700' : 'text-green-600'}`}>
              {medication.status || 'Pending'}
            </span>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <span className='text-neutral-800 text-sm font-medium'>Reminder</span>
          <input
            type="checkbox"
            checked={medication.reminder || false}
            onChange={() => onToggleReminder(medication.id)}
            className="w-5 h-5 accent-blue-500 cursor-pointer"
          />
        </div>
      </div>

      <div className='flex items-center gap-8 w-full mt-4'>
        <Button className='w-full' variant='outline' onClick={() => onEdit(medication.id)}>
          Edit
        </Button>
        <Button className='w-full bg-red-700' variant='accent' onClick={() => onDelete(medication.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default MedicationCard;