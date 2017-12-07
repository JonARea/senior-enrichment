'use strict'
const apiRouter = require('express').Router()
const campusRoutes = require('./campuses')
const db = require('../db')

apiRouter.use('/campuses', campusRoutes)

module.exports = apiRouter;
