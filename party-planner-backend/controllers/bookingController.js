const Booking = require('../models/Booking');
const User = require('../models/UserModel');
exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user.id });
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createBooking = async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        const booking = await newBooking.save();
        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getBookingsByUserId = async (req, res) => {
    const { userId } = req.params; // Extract userId from request parameters

    try {
        const bookings = await Booking.find({ userId });
        if (bookings.length === 0) {
            return res.status(404).json({ message: 'No bookings found for this user' });
        }
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.ChangeStatus= async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
  
    try {
      const booking = await Booking.findByIdAndUpdate(id, { status }, { new: true });
  
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
  
      res.json({ message: 'Booking status updated successfully', booking });
    } catch (error) {
      console.error('Error updating booking status:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  exports.getBookingsForUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const bookings = await Booking.find({ userId }); // Assuming 'userId' matches the field name in your Booking schema
        if (!bookings || bookings.length === 0) {
            return res.status(404).send('No bookings found for this user');
        }

        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).send('Internal Server Error');
    }
};
