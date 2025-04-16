import React from "react";

const DoctorAppointments = () => {
  // Dummy data for demonstration
  const appointments = [
    { id: 1, patient: "John Doe", date: "2025-04-12", time: "10:00 AM" },
    { id: 2, patient: "Jane Smith", date: "2025-04-13", time: "2:00 PM" },
  ];

  return (
    <div className="min-h-screen p-6 bg-white text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>
      <div className="space-y-4">
        {appointments.map((appt) => (
          <div key={appt.id} className="bg-blue-50 p-4 rounded-lg shadow-md">
            <p><strong>Patient:</strong> {appt.patient}</p>
            <p><strong>Date:</strong> {appt.date}</p>
            <p><strong>Time:</strong> {appt.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointments;