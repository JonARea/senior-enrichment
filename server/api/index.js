'use strict'
const apiRouter = require('express').Router()
const campusRoutes = require('./campuses')
const studentRoutes = require('./students')


apiRouter.use('/campuses', campusRoutes)
apiRouter.use('/students', studentRoutes)

module.exports = apiRouter;
