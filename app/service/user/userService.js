const encrypto = require("../common/encService.js");
const webService = require("../common/webService.js");
const dateTime = require('node-datetime');

function randomString(length, chars) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}
var rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
// ---------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------
//@author G MANIKAM
// User Login Service...
exports.login = (req, callback) => {
  let dummyUserEmail = "admin.org123@hmail.com";
  let dummyUserPassword = "admin.com#@!";
  let email = req.body.email;
  let password = req.body.password;
 
    
    var result = {};
    if (dummyUserEmail == email) {
      if (dummyUserPassword == password) {
        data = {
          current : 123456,
          name : "Admin",
          email : dummyUserEmail,
        }
          result.error = false; result.success = true; result.message = "Login Success"; result.current = data.current; result.data = data;
      }
      else{
        result.err = false; result.success = false; result.current = undefined; result.message = "Invalid password";
      }
        
    }
    else{
      result.err = false; result.success = false; result.current = undefined; result.message = "Invalid email id";
    }

    callback(result);
  
}; 
