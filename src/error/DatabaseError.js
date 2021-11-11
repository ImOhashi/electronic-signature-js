export class DatabaseError extends Error {
  /**
   * @public
   * @constructor
   * @param {string} paramName
   */
  constructor(paramName) {
    super(`Database not isn't connected\n${paramName}`);
    this.name = "DatabaseError";
  }
}
