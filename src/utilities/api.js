let medications = [
    { id: 1, name: "Paracetamol", dosage: "500mg", type: "Tablet", time: "08:00 AM", status: "pending", timerSet: false },
    { id: 2, name: "Ibuprofen", dosage: "400mg", type: "Capsule", time: "12:00 PM", status: "pending", timerSet: false },
    { id: 3, name: "Amoxicillin", dosage: "250mg", type: "Syrup", time: "06:00 PM", status: "pending", timerSet: false },
  ];
  
  const simulateDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  export const fetchMedications = async () => {
    await simulateDelay(1000);
    return medications;
  };
  
  export const addMedication = async (medication) => {
    await simulateDelay(500);
    const newMedication = {
      ...medication,
      id: medications.length + 1,
      status: "pending",
      timerSet: false,
    };
    medications.push(newMedication);
    return newMedication;
  };
  
  export const updateMedication = async (updatedMedication) => {
    await simulateDelay(500);
    medications = medications.map((med) =>
      med.id === updatedMedication.id ? updatedMedication : med
    );
    return updatedMedication;
  };
  
  export const deleteMedication = async (id) => {
    await simulateDelay(500);
    medications = medications.filter((med) => med.id !== id);
    return id;
  };