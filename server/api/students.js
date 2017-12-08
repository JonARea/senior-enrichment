const router = require('express').Router()
const Student = require('../db/models').Student

router.get('/:id', (req, res, next) => {
  Student.findOne({
    where: {
      id:  +req.params.id
    },
    include: [{all: true}]
  })
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
