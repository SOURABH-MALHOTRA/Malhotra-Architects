const User = require( "../Model/login.js");
const jwt = require ("jsonwebtoken");

const refreshToken = async (userId) => {
  const token = await jwt.sign(
    { id: userId },
    process.env.SECRET_KEY_REFRESH_TOKEN,
    { expiresIn: "5d" }
  );

  const updateRefreshToken = await User.updateOne(
    { _id: userId },
    { refreshToken: token }
  );

  return token;
};

module.exports = refreshToken;
