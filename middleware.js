//Logs HTTP method, Request URL, Response status code request details after the response is finished
export const requestLogger = (req, res, next) => {
  res.on("finish", () => {
    console.log(
      ` method: ${req.method}\n URL: ${req.url}\n StatusCode: ${res.statusCode}`
    );
  });
  // Proceed to next middleware/route handler if validation passes
  next();
};

// Validates user data in request body to ensure all required fields are present and properly formatted
export const validateUserData = (req, res, next) => {
  const requiredFields = ["firstname", "lastname", "age"];
  const missingFields = requiredFields.filter((field) => !(field in req.body));

  if (missingFields.length > 0) {
    return res.status(400).json({
      error: "Missing required fields",
      missingFields,
    });
  }

  if (typeof req.body.age !== "number") {
    return res.status(400).json({
      error: "Age must be a number",
    });
  }
  // Proceed to next middleware/route handler if validation passes
  next();
};
