const express = require('express');
const packageController = require('../controller/package.controller');
const packageRoute = express.Router();

packageRoute.post('/package', packageController.createPackage)
packageRoute.get('/packages', packageController.getPackages)
packageRoute.get('/package/:id', packageController.getPackageById)

module.exports = packageRoute;