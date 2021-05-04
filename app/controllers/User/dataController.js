const dataService = require("../../service/user/dataServices.js");
const webService = require("../../service/common/webService.js");

// @author G MANIKAM
// Function to get all records
exports.getData = (req, res) => {
    dataService.getData(req, result => {
    if (result.success) result.token = webService.tokenize((result.data));
    res.json(result);
  });
};

// @author G MANIKAM
// Function to get all records with date range
exports.getDataWithDateRange = (req, res) => {
  dataService.getDataWithDateRange(req, result => {
  if (result.success) result.token = webService.tokenize((result.data));
  res.json(result);
});
};


