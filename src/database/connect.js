import mongoose from "mongoose";

import { DatabaseError } from "../error/index.js";

class Connect {
  /**
   * @public
   * @memberof Connect
   * @method connect
   * @returns {void}
   */
  connect() {
    mongoose.connect(
      `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
      {
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASS,
        dbName: process.env.MONGO_COLLECTION,
      },
      (err) => {
        if (err) {
          throw new DatabaseError(err);
        } else {
          console.info("Database is connected");
        }
      }
    );
  }
}

export default new Connect();
