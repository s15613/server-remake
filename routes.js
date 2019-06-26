const express = require('express')
const router = express.Router();
const controllers = require('./controllers')

router.get('/', controllers.getAll)
router.get('/:category', controllers.getCategory)
router.get('/all/:videoId', controllers.getOne)
router.post('/', controllers.create)

module.exports = router;