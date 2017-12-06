const router = require('express').Router()
const Campus = require('../db/models/campus')

router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(response => res.send(response))
})

module.exports = router
