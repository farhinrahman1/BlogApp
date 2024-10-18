import mongoose from 'mongoose';

const connectToDB = async () => {
    const connectionURL = "mongodb+srv://farhinrahmanp:n34c4XX3jWT8rkSu@cluster0.slg0j.mongodb.net/"

    mongoose
        .connect(connectionURL)
        .then(() => console.log('Connected to blog DB successfully'))
        .catch((error) => console.log('Error connecting to blog DB', error));
    
}

export default connectToDB;