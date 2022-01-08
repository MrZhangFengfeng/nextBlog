// req is an instance of http.IncomingMessage, plus some pre-built middlewares.
// res is an instance of http.ServerResponse, plus some helper functions.

/**
 *  mock a  serverless function
 * @param {object} req  HTTP incoming message
 * @param {object} res  HTTP server response
 */
export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
}
