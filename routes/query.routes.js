const express = require('express');
const queryController = require('../controller/query.controller');
const queryRoute = express.Router();

queryRoute.route('/')
    .post(queryController.createQuery)
    .get(queryController.getQueries)
queryRoute.route('/:id')
    .get(queryController.getQueryById)
    .patch(queryController.updateQueryById)
queryRoute.route('/package/:packageId')
    .get(queryController.getQueryByPackageId)

module.exports = queryRoute;