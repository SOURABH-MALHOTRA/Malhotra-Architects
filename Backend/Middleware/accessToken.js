const jwt = require("jsonwebtoken");

const accessToken = async (userId) => {
  const token = await jwt.sign({ id: userId }, process.env.SECRET_KEY, {
    expiresIn: "30s",
  });

  return token;
};

module.exports= accessToken;
