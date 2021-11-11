import express from "express";
import dotenv from "dotenv";

import database from "./database/connect.js";

/**
 * @public
 */
class App {

  /**
   * @private
   * @memberof App
   * @constructor
   */
  constructor() {
    dotenv.config();

    this.app = express();

    database.connect();

    this.middlewares();
  }

  /**
   * @private
   * @memberof App
   * @method middlewares
   * @returns {void}
   */
  middlewares() {
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(
      express.urlencoded({
        parameterLimit: 100000,
        limit: "50mb",
        extended: false,
      })
    );
  }
}

export default new App().app;
