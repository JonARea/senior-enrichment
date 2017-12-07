const router = require('express').Router()
const Campus = require('../db/models/campus')

router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(response => res.send(response))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Campus.findById(+req.params.id)
    .then(response => res.send(response))
    .catch(next)
})

module.exports = router
