const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/pending-doctors', async (req, res) => {
    try {
      const doctors = await User.find({ role: 'doctor', approved: false });
      res.status(200).json({ doctors }); // ✅ MUST return in { doctors: [...] }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  

  // Approve doctor
router.put('/approve-doctor/:id', async (req, res) => {
    try {
      const doctorId = req.params.id;
      const doctor = await User.findByIdAndUpdate(doctorId, { approved: true }, { new: true });
      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found' });
      }
      res.status(200).json({ message: 'Doctor approved successfully', doctor });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  module.exports = router;