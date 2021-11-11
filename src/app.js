import express from "express";
import dotenv from "dotenv";

import database from "./database/connect.js"

class App {
  constructor() {
    dotenv.config();

    this.app = express();

    database.connect();

    this.middlewares();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
}

export default new App().app;
