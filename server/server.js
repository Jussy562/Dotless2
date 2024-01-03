import express from 'express';
import mongoose from 'mongoose';
import Message from './models/message.js';
// const Message = require ('../server/models/message');




const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://justluvia:baripago2345@cluster0.lxj7rkd.mongodb.net/Dotless?retryWrites=true&w=majority', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Root path route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

app.post('/api/contactMessages', async (req, res) => {
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
    res.status(500).json({ error: 'An error occurred while saving the message' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});