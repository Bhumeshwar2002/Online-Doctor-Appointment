const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req , res) => {
    try{
        const { fullName, email, password, role, specialization, licenseNumber, yearsOfExperience, clinicName } = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({msg:'User already exist'});

        const hashPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            fullName,
            email,
            password:hashPassword,
            role,
            specialization,
            licenseNumber,
            yearsOfExperience,
            clinicName,
            approved:role ==='doctor' ? false :true
        });

        await newUser.save();
        res.status(201).json({msg: 'User registration successfully. Wait for approval if Doctor'})
    } catch (err) {
        res.status(500).json({ msg: err.message });
      }
};

exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body; // ✅ role now included from frontend

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    // ✅ Role mismatch check
    if (user.role !== role) {
      return res.status(403).json({
        msg: `"Invalid credentials. Please check your email, password, and role.".`,
      });
    }

    // ✅ Doctor approval check
    if (user.role === 'doctor' && !user.approved)
      return res.status(403).json({ msg: 'Doctor account not approved yet' });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
