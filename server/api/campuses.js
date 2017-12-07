const router = require('express').Router()
const Campus = require('../db/models').Campus

router.get('/:id', (req, res, next) => {
  console.log('hit the correct route')
  Campus.findById(+req.params.id)
    .then(response => res.send(response))
    .catch(next)
})

router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(response => res.send(response))
    .catch(next)
})

module.exports = router
