import { SignatureServiceError } from "../errors/index.js";
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
    if (signatureName.length() > 5 && signatureName instanceof string) {
      const signature = signatureRepository.getByName(signatureName);

      if (signature) {
        return signature;
      } else {
        throw new SignatureServiceError("Register not found");
      }
    } else {
      throw new SignatureServiceError(
        "Number of characters less than accepted"
      );
    }
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
