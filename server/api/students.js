const router = require('express').Router()
const Student = require('../db/models').Student

//Read

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

//Create

router.post('/', (req, res, next) => {
  console.log(req.body)
  Student.create(req.body)
    .then(student => res.send(student))
    .catch(next)
})

//Update

router.put('/:id', (req, res, next) => {
  Student.findById(+req.params.id)
  .then(student => student.update(req.body), error => next(error))
  .then(res.send('Successfully updated the student.'))
  .catch(next)
})

//Delete

router.delete('/:id', (req, res, next) => {
  Student.destroy({
    where: {
      id: +req.params.id
    }
  })
  .then(res.send('The student was successfully deleted.'))
  .catch(next)
})

module.exports = router
