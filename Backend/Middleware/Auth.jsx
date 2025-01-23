// const jwt = require("jsonwebtoken");

// // Generate Token
// const createToken = async () => {
//   try {
//     const token = await jwt.sign(
//       { _id: "67880559b48c20542e1831b6" },
//       "masterofarchitectworld",
//       { expiresIn: "3d" }
//     );
//     console.log("Generated Token:", token);
//     return token;
//   } catch (error) {
//     console.error("Error creating token:", error);
//     throw error;
//   }
// };

// // Authentication Middleware
// const Authentication = async (req, res, next) => {
//   try {
//     const token = req.headers["authorization"]; // Retrieve token from request headers
//     if (!token) {
//       return res.status(401).send("Access Denied: No Token Provided");
//     }

//     const verify = await jwt.verify(token, "masterofarchitectworld"); // Verify the token
//     console.log("Verified Token Payload:", verify);

//     req.user = verify; // Attach decoded token payload to the request object
//     next();
//   } catch (error) {
//     console.error("Error in authentication:", error);
//     res.status(401).send("Invalid Token");
//   }
// };

// module.exports = { createToken, Authentication };
