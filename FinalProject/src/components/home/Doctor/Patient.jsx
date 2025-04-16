import React from "react";

const DoctorPatients = () => {
  // Dummy patient list
  const patients = [
    { id: 1, name: "John Doe", age: 30, condition: "Fever" },
    { id: 2, name: "Jane Smith", age: 25, condition: "Allergy" },
  ];

  return (
    <div className="min-h-screen p-6 bg-white text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Patients</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {patients.map((patient) => (
          <div key={patient.id} className="bg-green-50 p-4 rounded-lg shadow-md">
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Condition:</strong> {patient.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorPatients;
