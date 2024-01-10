import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';
import Message from './models/message.js';





const app = express();
dotenv.config();


const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());



// mongoose.connect('mongodb+srv://justluvia:baripago2345@cluster0.lxj7rkd.mongodb.net/Dotless?retryWrites=true&w=majority');

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// Root path route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

app.post('/api/contactMessages', async (req, res) => {
    try {
        // Extract data from the request body
        const { name, email, message } = req.body;

         console.log('Received data:', { name, email, message });
    
        // Create a new message document using the Message model
        const newMessage = new Message({
          name,
          email,
          message,
          timestamp: new Date(),
        });
    
        // Save the message to the MongoDB "messages" collection
        await newMessage.save();
        console.log('Message saved to the database:', newMessage);
    
        res.status(201).json({ message: 'Message sent successfully'});
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'An error occurred while saving the message' });
  }
});

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/dotless';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  
 
 
  
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
     
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});