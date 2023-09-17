
import mongoose from 'mongoose';
require('dotenv').config();

export async function connectToDatabase() {


  try {
    await mongoose.connect(process.env.mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}
