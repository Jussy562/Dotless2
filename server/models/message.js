import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  timestamp: Date,
});

const Message = mongoose.model('Message', messageSchema, 'contactMessaages');

export default Message;
