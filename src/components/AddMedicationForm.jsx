import React, { useState } from "react";
import Select from "react-select";
import Button from "./Button";

const dosages = [
  { value: "5mg", label: "5mg" },
  { value: "10mg", label: "10mg" },
  { value: "20mg", label: "20mg" },
  { value: "50mg", label: "50mg" },
  { value: "80mg", label: "80mg" },
  { value: "100mg", label: "100mg" },
  { value: "250mg", label: "250mg" },
  { value: "500mg", label: "500mg" },
  { value: "750mg", label: "750mg" },
  { value: "1000mg", label: "1000mg" },
  { value: "1500mg", label: "1500mg" },
];

const frequencies = [
  { value: "Once a day", label: "Once a day" },
  { value: "Twice a day", label: "Twice a day" },
  { value: "Three times a day", label: "Three times a day" },
  { value: "Every 4 hours", label: "Every 4 hours" },
  { value: "Every 6 hours", label: "Every 6 hours" },
  { value: "Every 8 hours", label: "Every 8 hours" },
  { value: "Every 12 hours", label: "Every 12 hours" },
  { value: "As needed", label: "As needed" },
  { value: "Before meals", label: "Before meals" },
  { value: "After meals", label: "After meals" },
];


const AddMedicationForm = ({ onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    dosage: null,
    dueDateTime: "",
    frequency: null,
  });

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

    const medicationData = {
      name: formData.name,
      dosage: formData.dosage?.value || "",
      time: timeString,
      timeFormat: timeFormat,
      date: dateString,
      fullDateTime: formData.dueDateTime,
      frequency: formData.frequency?.value || "",
      status: "Pending",
      reminder: false,
    };

    onSave(medicationData);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md w-full">
      <h2 className="text-xl font-bold text-blue-700 mb-4">Add Medication</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
       
        <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">Drug Name*</span>
          <input
            required
            name="name"
            placeholder="Enter drug name"
            type="text"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.name}
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">Dosage</span>
          <Select
            options={dosages}
            value={formData.dosage}
            onChange={(option) => setFormData({ ...formData, dosage: option })}
            isClearable
            isSearchable
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">Date & Time*</span>
          <input
            required
            name="dueDateTime"
            type="datetime-local"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            value={formData.dueDateTime}
          />
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">Frequency</span>
          <Select
            options={frequencies}
            value={formData.frequency}
            onChange={(option) => setFormData({ ...formData, frequency: option })}
            isClearable
            isSearchable
          />
        </label>

        <div className="flex justify-bet gap-4">
          <Button className="w-full" variant="text" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button className="w-full" variant="primary" type="submit">
            Save Medication
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddMedicationForm;