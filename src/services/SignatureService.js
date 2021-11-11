import signatureRepository from "../repositories/SignatureRepository.js";

/**
 * @public
 */
class SignatureService {
  /**
   * @public
   * @memberof SignatureService
   * @method get
   * @param {string} id
   * @returns {object}
   */
  async get(id) {
    return signatureRepository.get(id);
  }

  /**
   * @public
   * @memberof SignatureService
   * @method getByName
   * @param {string} signatureName
   * @returns {object}
   */
  async getByName(signatureName) {
    return signatureRepository.getByName(signatureName);
  }

  /**
   * @public
   * @memberof SignatureService
   * @method getAll
   * @returns {[object]}
   */
  async getAll() {
    return signatureRepository.getAll();
  }
}

export default new SignatureService();
