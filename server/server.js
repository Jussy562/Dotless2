import express from 'express';
import mongoose from 'mongoose';
import Message from './models/message.js';
// const Message = require ('../server/models/message');

// Rest of your server code remains the same


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/contact', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.post('/api/messages', async (req, res) => {
    try {
        // Extract data from the request body
        const { name, email, message } = req.body;
    
        // Create a new message document using the Message model
        const newMessage = new Message({
          name,
          email,
          message,
          timestamp: new Date(),
        });
    
        // Save the message to the MongoDB "messages" collection
        await newMessage.save();
    
        res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});