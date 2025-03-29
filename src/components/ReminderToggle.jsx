import { useState } from "react";

const ReminderToggle = ({ label = "Enable Reminder" }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="flex items-center space-x-2">
      <input 
        type="checkbox" 
        id="reminder" 
        checked={checked} 
        onChange={handleChange} 
        className="w-5 h-5"
      />
      <label htmlFor="reminder">{checked ? "Reminder Enabled" : label}</label>
    </div>
  );
};

export default ReminderToggle;
