import mongoose from "mongoose";

class Connect {
    connect() {
        mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`, {
            user: process.env.MONGO_USER,
            pass: process.env.MONGO_PASS,
            dbName: process.env.MONGO_COLLECTION,
        }, (err) => {
            if(err) {
                throw new Error(err)
            } else {
                console.log("Database is connected");
            }
        });
    }
}

export default new Connect();