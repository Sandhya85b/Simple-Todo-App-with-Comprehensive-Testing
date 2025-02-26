const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ msg: "Access denied,No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        res.status(403).json({ msg: "Error" });
      } else {
        res.user = jwt.decoded;
        next();
      }
    });
  } catch (err) {
    res.status(500).json({ msg: "Invalid token" });
  }
};
module.exports = authMiddleware;
