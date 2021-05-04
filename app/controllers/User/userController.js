const userService = require("../../service/user/userService.js");
const webService = require("../../service/common/webService.js");

// @author G MANIKAM
// Login API for User...
// Params : email and password...
exports.login = (req, res) => {
  userService.login(req, result => {
    var id = result.current;
    if (result.success) result.token = webService.tokenize(id);
    res.json(result);
  });
};



