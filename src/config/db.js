import mongoose from 'mongoose';

const mongoDbUrl = 'mongodb+srv://mohammedshik3:v1LkusUH7sc7kG52@cluster0.1dqosng.mongodb.net/ecommerce-app';

const connectDb = async () => {
  try {
    await mongoose.connect(mongoDbUrl);
    console.log('Database Connected');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

export default connectDb;
