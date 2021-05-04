const webService = require("../../service/common/webService.js");

// @author G MANIKAM
// To Logout (for both admin and user)...
exports.logout = (req, res) => {
  webService.validate(req, data => {
    res.json(data);
  });
};

// @author G MANIKAM
// To get the encryption of the password...
exports.encryptPass = (req, res) => {
  res.json(require("../../service/encService.js").encrypt(req.params.pass));
};



