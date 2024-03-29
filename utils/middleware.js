const logger = require("./logger");

// custom request logger middleware
const requestLogger = (request, response, next) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

// unknown endpoint middleware
const unknownEndpoint = (request, response) => {
  response.status(404).send({
    error: "unknown endpoint",
  });
};

// Error handler middleware (must be the last middleware)
const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  switch (error.name) {
    case "CastError":
      return response.status(400).send({ error: "Malformatted id" });
    case "ValidationError":
      return response.status(400).json({ error: error.message });
    case "JsonWebTokenError":
      return response.status(401).json({ error: "Invalid token" });
    case "TokenExpiredError":
      return response.status(401).json({ error: "Token expired" });
  }

  next(error);
};

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
};
