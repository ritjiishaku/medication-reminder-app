import React, { useState } from "react";
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

        <div className="flex justify-end gap-3">
          <Button variant="outline" type="button" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save Medication
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddMedicationForm;