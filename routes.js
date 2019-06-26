const express = require('express')
const router = express.Router()
const controllers = require('./controllers')

router.post('/', controllers.create)
router.get('/', controllers.getAll)
router.get('/:category', controllers.getCategory)
router.get('/all/:videoId', controllers.getOne)

module.exports = router;