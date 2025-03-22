// Mock data for medications
let medications = [
    { id: 1, name: "Paracetamol", dosage: "500mg", type: "Tablet", time: "08:00 AM", status: "pending", timerSet: false },
    { id: 2, name: "Ibuprofen", dosage: "400mg", type: "Capsule", time: "12:00 PM", status: "pending", timerSet: false },
    { id: 3, name: "Amoxicillin", dosage: "250mg", type: "Syrup", time: "06:00 PM", status: "pending", timerSet: false },
  ];
  
  // Simulate API delay
  const simulateDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  // Fetch all medications
  export const fetchMedications = async () => {
    await simulateDelay(1000); // Simulate a 1-second delay
    return medications;
  };
  
  // Add a new medication
  export const addMedication = async (medication) => {
    await simulateDelay(500); // Simulate a 0.5-second delay
    const newMedication = {
      ...medication,
      id: medications.length + 1, // Generate a new ID
      status: "pending", // Default status
      timerSet: false, // Default timer state
    };
    medications.push(newMedication); // Add to the mock data
    return newMedication;
  };
  
  // Update an existing medication
  export const updateMedication = async (updatedMedication) => {
    await simulateDelay(500); // Simulate a 0.5-second delay
    medications = medications.map((med) =>
      med.id === updatedMedication.id ? updatedMedication : med
    );
    return updatedMedication;
  };
  
  // Delete a medication by ID
  export const deleteMedication = async (id) => {
    await simulateDelay(500); // Simulate a 0.5-second delay
    medications = medications.filter((med) => med.id !== id);
    return id; // Return the deleted ID for confirmation
  };