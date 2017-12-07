const router = require('express').Router()
const Student = require('../db/models').Student

router.get('/:id', (req, res, next) => {
  Student.findById(+req.params.id)
    .then(response => res.send(response))
    .catch(next)
})

router.get('/', (req, res, next) => {
  console.log('hit the correct route')
  Student.findAll()
    .then(response => res.send(response))
    .catch(next)
})

module.exports = router
