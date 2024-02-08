const mongoose = require('mongoose');
const mongoUrl = 'mongodb+srv://u20ec172:467149@cluster0.v18vhxe.mongodb.net/booksdata?retryWrites=true&w=majority';
///we have to write database name in between .net/ and ? i.e booksdata


const mongoDB = async () => {
  try {
    // Connect to MongoDB asynchronously
    await mongoose.connect(mongoUrl, { useUnifiedTopology: true });
    console.log('Connected Successfully');

    // Access the "sample" collection and fetch data
    const fetchdata = mongoose.connection.db.collection("sample"); 
    // Use Promises or async/await to handle asynchronous operations
    const data = await fetchdata.find({}).toArray();
   console.log(data);


  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  } finally {
    // Close the MongoDB connection after fetching data
    await mongoose.connection.close();
  }
};

module.exports = mongoDB;
