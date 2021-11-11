import { Model } from "mongoose";

import BaseRepository from "./BaseRepository.js";

export class SignatureRepository extends BaseRepository {
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
   * @param {string} signatureName
   * @returns {object}
   */
  async getByName(signatureName) {
    return this.model.findOne({
      fullname: signatureName,
    });
  }
}
