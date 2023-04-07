const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const Booking = require('./models/booking');

mongoose.connect('mongodb://localhost:27017/bookings', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.post('/', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const booking = new Booking({ name, email, phone });
    await booking.save();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'yourgmailusername@gmail.com',
        pass: 'yourgmailpassword'
      }
    });

    const mailOptions = {
      from: 'yourgmailusername@gmail.com',
      to: email,
      subject: 'Booking Confirmation',
      text: `Hi ${name},\n\nThank you for booking with us! Your booking has been confirmed.\n\nBest regards,\nThe Booking Team`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });

    res.status(200).json({ message: 'Booking saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
