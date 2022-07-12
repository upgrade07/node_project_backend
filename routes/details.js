const express = require('express')
const detailsController = require('../component/details')

const detailsRouter = express.Router()
detailsRouter.route('/details').get(detailsController.details)
module.exports = detailsRouter
