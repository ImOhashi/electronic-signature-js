import httpStatus from "../enums/httpStatus.js";
import signatureService from "../services/SignatureService.js";
import { SignatureControllerError } from "../errors/index.js";

/**
 * @public
 */
class SignatureController {
  /**
   * @public
   * @memberof SignatureController
   * @method get
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {import("express").Response}
   */
  async get(req, res) {
    const { id } = req.params;

    if (!id) {
      return res
        .status(httpStatus.NOT_FOUND.status)
        .json(new SignatureControllerError("Id not informed."));
    } else {
      const signature = await signatureService.get(id);

      return res.status(httpStatus.OK.status).json(signature);
    }
  }

  /**
   * @public
   * @memberof SignatureController
   * @method getAll
   * @param {import("express").Request} req
   * @param {import("express").Request} res
   * @returns {[import("../models/Signature.js"]}
   */
  async getAll(req, res) {
    const allSignatures = await signatureService.getAll();

    if (!allSignatures) {
      return res
        .status(httpStatus.NOT_FOUND.status)
        .json(new SignatureControllerError("Not found signatures"));
    } else {
      return res.status(httpStatus.OK.status).json(allSignatures);
    }
  }

  /**
   * @public
   * @memberof SignatureController
   * @method create
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @returns {import("express").Response}
   */
  async create(req, res) {
    if (req.body) {
      const newSignature = await signatureService.create(req.body);

      return res.status(httpStatus.CREATED.status).json(newSignature);
    } else {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json(new SignatureControllerError("Request body not informed"));
    }
  }
}

export default new SignatureController();
