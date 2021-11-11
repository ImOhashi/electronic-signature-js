import { Model } from "mongoose";

import BaseRepository from "./BaseRepository.js";
import { SignatureModel } from "../models/index.js";

/**
 * @public
 */
class SignatureRepository extends BaseRepository {
  /**
   * @public
   * @memberof SignatureRepository
   * @constructor
   * @param {Model} model
   */
  constructor(signatureModel) {
    super(signatureModel);
  }

  /**
   * @public
   * @memberof SignatureRepository
   * @method getByName
   * @param {string} signatureName
   * @returns {object}
   */
  async getByName(signatureName) {
    return this.model.findOne({
      fullname: signatureName,
    });
  }
}

export default new SignatureRepository(SignatureModel);
