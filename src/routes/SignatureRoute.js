import express from "express";

import signatureController from "../controllers/SignatureController.js";

/**
 * @public
 */
class SignatureRouter {
  /**
   * @public
   * @memberof SignatureRouter
   * @constructor
   */
  constructor() {
    this.router = express.Router();

    this.setRoutes();
  }

  /**
   * @private
   * @memberof SignatureRouter
   * @method setRoutes
   * @returns {void}
   */
  setRoutes() {
    this.router
      .get("/:id", signatureController.get)
      .post("/", signatureController.create);
  }
}

export default new SignatureRouter().router;
