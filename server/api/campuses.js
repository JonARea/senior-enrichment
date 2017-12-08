const router = require('express').Router()
const Campus = require('../db/models').Campus

//Read routes

router.get('/:id', (req, res, next) => {
  Campus.findById(+req.params.id)
    .then(campus => res.send(campus))
    .catch(next)
})

router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campusesArray => res.send(campusesArray))
    .catch(next)
})

//Create

router.post('/', (req, res, next) => {
  console.log(req.body)
  Campus.create(req.body)
    .then(campus => res.send(campus))
    .catch(next)
})

//Update

router.put('/:id', (req, res, next) => {
  Campus.findById(+req.params.id)
  .then(campus => campus.update(req.body), error => next(error))
  .then(res.send('Successfully updated the campus.'))
  .catch(next)
})

//Delete

router.delete('/:id', (req, res, next) => {
  Campus.destroy({
    where: {
      id: +req.params.id
    }
  })
  .then(res.send('The campus was successfully deleted.'))
  .catch(next)
})

module.exports = router
