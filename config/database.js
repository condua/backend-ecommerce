const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

const connectDatabase = async () => {
    try {
      await mongoose.connect(
        process.env.MONGO_URI || 'mongodb+srv://phanhoangphuc0311:%40Phuc1755@cluster0.kkn7cwq.mongodb.net/ecommerce?authSource=Cluster0&authMechanism=SCRAM-SHA-1',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      )
  
      console.log('MongoDB connection SUCCESS')
    } catch (error) {
      console.error('MongoDB connection FAIL')
      process.exit(1)
    }
  }
  

module.exports = connectDatabase;