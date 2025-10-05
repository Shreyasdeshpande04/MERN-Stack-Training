import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

// Allow requests from your frontend
app.use(cors());

// To parse JSON request bodies
app.use(express.json());

// Connect to MongoDB (replace with your connection string)
mongoose.connect(
  'mongodb+srv://deshpandeshreyas434:lMw5xlMuQCbxKIZW@cluster0.w4l2zll.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error('MongoDB connection error:', err));

// Define schema & model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  phone: String,
});

const User = mongoose.model('User', userSchema);

// GET endpoint to fetch all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users); // Send array of users
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST endpoint to create a user
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.delete('/api/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully', user: deletedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Start server on port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
