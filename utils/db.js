import mongoose from 'mongoose';

const dbConnection = async () => {
    const dbName = 'User_DB';
    const url = `${process.env.MONGO_URI}/${dbName}`
    const options = {
        useNewUrlParser: false,
        useUnifiedTopology: false
        };

        await mongoose.connect(url, options)
        .then(() => {
                console.log(`connected to ${url}`);
        }).catch((err)=> {
            console.log(err);
        })
}
export default dbConnection;