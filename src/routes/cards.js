var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.send('GET handler for /cards route.')
})

router.post('/', function(req, res) {
    res.send('POST handler for /cards route.')
})

module.exports = router;