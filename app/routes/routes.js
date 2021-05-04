module.exports = app => {
/*
|-------------------------------------------------------------------------------------------|
|------ADMIN CONTROLLER------ADMIN CONTROLLER-----ADMIN CONTROLLER-----ADMIN CONTROLLER-----|
|-------------------------------------------------------------------------------------------|
*/
    const commonController = require('../controllers/common/appController.js');
/*
|-------------------------------------------------------------------------------------------|
|-------USER CONTROLLER------USER CONTROLLER------USER CONTROLLER------USER CONTROLLER------|
|-------------------------------------------------------------------------------------------|
*/
    const userController = require('../controllers/User/userController.js');
    const dataController = require('../controllers/User/dataController.js')

/*
|--------------------------------------------------------------------------------------------
|-------USER ROUTE-------USER ROUTE-------USER ROUTE-------USER ROUTE-------USER ROUTE------|
|--------------------------------------------------------------------------------------------
*/
    app.post('/api/v1/user/login', userController.login);
    app.get('/api/v1/user/get-report', dataController.getData);
    app.get('/api/v1/user/get-report-with-date-range/:startdate/:enddate', dataController.getDataWithDateRange);

    

// Author: G MANIKAM || Logout Routes
    app.get('/logout', commonController.logout);

};

