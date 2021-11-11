import express from "express";

class App {
  constructor() {
    this.app = express();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
}

export default new App().app;