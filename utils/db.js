import mongoose from 'mongoose';
// import { MongoClient } from 'mongodb';

// localhost database connection
const dbConnection = async () => {
  const dbName = 'User_DB';
  const url = `${process.env.MONGO_URI}/${dbName}`;
  const options = {
    useNewUrlParser: false,
    useUnifiedTopology: false
  };

  await mongoose.connect(url, options)
    .then(() => {
      console.log(`connected to ${url}`);
    }).catch((err) => {
      console.log(err);
    });
};

// cloud database connection
async function run () {
  try {
    const uri = process.env.MONGO_URI_ATLAS;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    await mongoose.connect(uri, options);
    console.log('You successfully connected to MongoDB!');
  } catch (err) {
    console.log(err);
  }
}
export default run;
