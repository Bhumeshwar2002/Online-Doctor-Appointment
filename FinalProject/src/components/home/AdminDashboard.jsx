import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [pendingDoctors, setPendingDoctors] = useState([]);

  const fetchPendingDoctors = async () => {
    try {
      const res = await axios.get("/api/admin/pending-doctors", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setPendingDoctors(res.data?.doctors ?? []);
      console.log("Pending doctors:", res.data.doctors);

;
      console.log(res.data.doctors)
    } catch (err) {
      console.error("Error fetching pending doctors:", err);
    }
  };

  const handleApprove = async (doctorId) => {
    try {
      const token = localStorage.getItem("token"); // ✅ Retrieve token
      const res = await axios.put(
        `/api/admin/approve-doctor/${doctorId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("API response:", res.data);
      fetchPendingDoctors(); // refresh the list after approval
    } catch (err) {
      console.error("Error approving doctor:", err);
    }
  };
  

  useEffect(() => {
    fetchPendingDoctors();
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Pending Doctor Approvals</h2>
      {!Array.isArray(pendingDoctors) || pendingDoctors.length === 0 ? (
        <p className="text-gray-600">No pending doctors right now.</p>
      ) : (
        <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
              <th className="p-4">Name</th>
              <th className="p-4">Specialization</th>
              <th className="p-4">License</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingDoctors.map((doc) => (
              <tr key={doc._id} className="border-b hover:bg-gray-50">
                <td className="p-4">{doc.fullName}</td>
                <td className="p-4">{doc.specialization}</td>
                <td className="p-4">{doc.licenseNumber}</td>
                <td className="p-4">
                  <button
                    onClick={() => handleApprove(doc._id)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
