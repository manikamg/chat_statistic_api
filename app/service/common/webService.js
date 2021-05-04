var nodeMailer = require("nodemailer");
const secret = "ag158h1rtr568rtgd1s5";
var jwt = require("jsonwebtoken");
var moment = require("moment");

// @author G MANIKAM
// To create a token...
exports.tokenize = userId => {
  var token = jwt.sign({ id: userId }, secret, { expiresIn: 50000000 });
  return token;
};

// @author G MANIKAM
// To validate a token...
exports.validate = (req, callback) => {
  var token = req.headers["x-access-token"] || req.headers["authorization"];
  if (token.startsWith("x-access-token")) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }
  if (!token) callback({ auth: false, message: "No token provided." });
  else
    jwt.verify(token, secret, function(err, decoded) {
      if (err)
        callback({ auth: false, message: "Failed to Authenticate Token." });
      else {
        callback({
          auth: true,
          message: "Token Authenticated.",
          data: decoded
        });
      }
    });
};


