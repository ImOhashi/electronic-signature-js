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
   * @param {String} id
   * @returns {import("../models/Signature.js"}
   */
  async get(id) {
    if (id) {
      const signature = await signatureRepository.get(id);

      if (signature) {
        return signature;
      } else {
        throw new SignatureServiceError("Register not found");
      }
    } else {
      throw new SignatureServiceError("Entered id is invalid");
    }
  }

  /**
   * @public
   * @memberof SignatureService
   * @method getAll
   * @returns {[import("../models/Signature.js"]}
   */
  async getAll() {
    const allSignatures = await signatureRepository.getAll();

    if (allSignatures.length > 0) {
      return allSignatures;
    } else {
      throw new SignatureServiceError("There are no registered subscriptions");
    }
  }

  /**
   * @public
   * @memberof SignatureService
   * @param {import("../models/Signature.js")} model
   * @returns {import("../models/Signature.js"}
   */
  async create(model) {
    if (model) {
      const newSignature = await signatureRepository.create(model);

      return newSignature;
    } else {
      throw new SignatureServiceError(
        "impossible to register new subscription"
      );
    }
  }
}

export default new SignatureService();
