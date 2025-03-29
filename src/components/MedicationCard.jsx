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
  
  const handleToggleReminder = () => {
    const newReminderState = !medication.reminder;
    onToggleReminder(medication.id, newReminderState);

    if (newReminderState) {
      alert(`Reminder enabled for ${medication.name || 'Medication'}, ${medication.dosage || 'unspecified dosage'} at ${medication.time || 'unspecified time'}.`);
    }
  };

  return (
    <div className="w-full bg-neutral-50 rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-200 p-4 sm:p-6">
      <div className="flex justify-between items-start gap-4">
       
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-bold text-blue-700 mb-2 line-clamp-1">
            {medication.name || 'Medication Name'}
          </h2>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Dosage:</span>
              <span className="text-sm font-medium text-gray-800">
                {medication.dosage || 'Not specified'}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Time:</span>
              <span className="text-sm font-medium text-gray-800">
                {medication.time || '--:--'}
              </span>
              {medication.timeFormat && (
                <span className="text-xs font-medium text-gray-500">
                  {medication.timeFormat}
                </span>
              )}
            </div>
            
            {medication.frequency && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Frequency:</span>
                <span className="text-sm font-medium text-gray-800">
                  {medication.frequency}
                </span>
              </div>
            )}
          </div>
        </div>
        
    
        <div className="flex items-center gap-2">
          <label htmlFor={`reminder-${medication.id}`} className="text-sm sm:text-base text-gray-700 cursor-pointer">
            Reminder
          </label>
          
          <input
            id={`reminder-${medication.id}`}
            type="checkbox"
            checked={medication.reminder || false}
            onChange={handleToggleReminder}
            className="w-5 h-5 cursor-pointer accent-blue-600 border"
          />
        </div>
      </div>
      
    
      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm sm:text-base text-blue-500">Status:</span>
        <span className={`text-sm sm:text-base font-medium ${medication.status === 'Missed' ? 'text-red-600' : 'text-green-600'}`}>
          {medication.status || 'Pending'}
        </span>
      </div>
    
   
      <div className="bg-gray-50 px-4 sm:px-6 py-3 border-t border-gray-100 mt-4">
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            onClick={() => onEdit(medication)}
            className="py-2 text-sm sm:text-base w-full"
          >
            Edit
          </Button>
          <Button 
            variant="accent" 
            onClick={() => onDelete(medication.id)}
            className="py-2 text-sm sm:text-base w-full"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MedicationCard;