import React, { useState, useEffect } from "react";
import MedicationCard from "../components/MedicationCard";
import AddMedicationForm from "../components/AddMedicationForm";
import EditMedicationForm from "../components/EditMedicationForm";
import Modal from "../components/Modal";
import Button from "../components/Button";

const MedicationList = () => {
  const [medications, setMedications] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingMedication, setEditingMedication] = useState(null);

  useEffect(() => {
    const savedMedications = JSON.parse(localStorage.getItem("medications")) || [];
    setMedications(savedMedications);
  }, []);

  useEffect(() => {
    if (medications.length > 0) {
      localStorage.setItem("medications", JSON.stringify(medications));
    }
  }, [medications]);

  const saveNewMedication = (newMedication) => {
    const medicationWithId = { 
      ...newMedication, 
      id: Date.now(),
      status: "pending", 
      reminderEnabled: false 
    };
    setMedications(prev => [...prev, medicationWithId]);
    setShowAddModal(false);
  };

  const updateMedication = (updatedMedication) => {
    setMedications(prev => 
      prev.map(med => 
        med.id === updatedMedication.id ? updatedMedication : med
      )
    );
    setEditingMedication(null);
  };

  const handleDelete = (id) => {
    setMedications(prev => prev.filter(med => med.id !== id));
  };

  const handleToggleReminder = (id) => {
    setMedications(prev => 
      prev.map(med => 
        med.id === id 
          ? { ...med, reminderEnabled: !med.reminderEnabled } 
          : med
      )
    );
  };

  const handleEdit = (medication) => {
    setEditingMedication(medication);
  };

  return (
    <div className="pt-16 p-4 md:p-6 max-w-7xl mx-auto">
      {medications.length === 0 ? (
        <section className="flex flex-col items-center justify-center gap-6 md:gap-8 p-6 md:py-24 bg-neutral-50 rounded-lg">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-medium text-blue-700 mb-3 md:mb-4">
              Add Your Medication
            </h1>
            <p className="text-base md:text-lg text-blue-500 mb-6 md:mb-8">
              You haven’t added any medications yet. Click the button below to start managing your medications!
            </p>
            <Button 
              variant="primary" 
              onClick={() => setShowAddModal(true)}
              className="px-6 py-2 md:px-8 md:py-3"
            >
              Add Medication
            </Button>
          </div>
        </section>
      ) : (
        <>
          <div className="pt-16 flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
            <div>
              <h1 className="text-2xl md:text-4xl font-medium text-blue-700">
                Your Medications
              </h1>
            </div>
            <Button 
              variant="primary" 
              onClick={() => setShowAddModal(true)}
              className="w-full md:w-auto px-6 py-2 md:px-8 md:py-3"
            >
              Add Medication
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {medications.map((medication) => (
              <MedicationCard
                key={medication.id}
                medication={medication}
                onDelete={handleDelete}
                onToggleReminder={handleToggleReminder}
                onEdit={() => handleEdit(medication)}
              />
            ))}
          </div>
        </>
      )}

      {showAddModal && (
        <Modal onClose={() => setShowAddModal(false)}>
          <AddMedicationForm
            onSave={saveNewMedication}
            onClose={() => setShowAddModal(false)}
          />
        </Modal>
      )}

      {editingMedication && (
        <Modal onClose={() => setEditingMedication(null)}>
          <EditMedicationForm
            medication={editingMedication}
            onSave={updateMedication}
            onClose={() => setEditingMedication(null)}
          />
        </Modal>
      )}
    </div>
  );
};

export default MedicationList;