import React, { useState, useEffect } from "react";
import Select from "react-select";
import Button from "./Button";

const dosages = [
  { value: "80mg", label: "80mg" },
  { value: "500mg", label: "500mg" },
  { value: "1000mg", label: "1000mg" },
];

const frequencies = [
  { value: "Once a day", label: "Once a day" },
  { value: "Twice a day", label: "Twice a day" },
  { value: "Every 8 hours", label: "Every 8 hours" },
];

const EditMedicationForm = ({ medication, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    dosage: null,
    dueDateTime: "",
    frequency: null,
  });

  useEffect(() => {
    if (medication) {
      setFormData({
        name: medication.name,
        dosage: dosages.find(d => d.value === medication.dosage) || null,
        dueDateTime: medication.fullDateTime || "",
        frequency: frequencies.find(f => f.value === medication.frequency) || null,
      });
    }
  }, [medication]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const dateTime = new Date(formData.dueDateTime);
    const timeString = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const timeFormat = dateTime.getHours() >= 12 ? 'PM' : 'AM';
    const dateString = dateTime.toLocaleDateString();

    const updatedMedication = {
      ...medication,
      name: formData.name,
      dosage: formData.dosage?.value || "",
      time: timeString,
      timeFormat: timeFormat,
      date: dateString,
      fullDateTime: formData.dueDateTime,
      frequency: formData.frequency?.value || "",
    };

    onSave(updatedMedication);
  };

  return (
    <div className="bg-white rounded-lg shadow-md w-full max-w-md mx-4 sm:mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4 sm:mb-6">
        Edit Medication
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm sm:text-base font-medium text-gray-700">
            Drug Name*
          </span>
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm sm:text-base font-medium text-gray-700">
            Dosage
          </span>
          <Select
            options={dosages}
            value={formData.dosage}
            onChange={(option) => setFormData({ ...formData, dosage: option })}
            isClearable
            isSearchable
            className="text-sm sm:text-base"
            classNamePrefix="select"
            styles={{
              control: (base) => ({
                ...base,
                minHeight: '42px',
                borderColor: '#d1d5db',
                '&:hover': {
                  borderColor: '#d1d5db'
                }
              })
            }}
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm sm:text-base font-medium text-gray-700">
            Date & Time*
          </span>
          <input
            required
            name="dueDateTime"
            type="datetime-local"
            className="border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={handleChange}
            value={formData.dueDateTime}
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-sm sm:text-base font-medium text-gray-700">
            Frequency
          </span>
          <Select
            options={frequencies}
            value={formData.frequency}
            onChange={(option) => setFormData({ ...formData, frequency: option })}
            isClearable
            isSearchable
            className="text-sm sm:text-base"
            classNamePrefix="select"
            styles={{
              control: (base) => ({
                ...base,
                minHeight: '42px',
                borderColor: '#d1d5db',
                '&:hover': {
                  borderColor: '#d1d5db'
                }
              })
            }}
          />
        </label>

        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Button 
            variant="text" 
            type="button" 
            onClick={onClose}
            className="w-full py-2 sm:py-2.5"
          >
            Cancel
          </Button>
          <Button 
            variant="primary" 
            type="submit"
            className="w-full py-2 sm:py-2.5"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditMedicationForm;