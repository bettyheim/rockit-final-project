// Debugging
var bug = require('debug')
var debug = bug('rockit-express:api:user')

// Database
var db = require('../../lib/db')

// Router
var express = require('express')
var router = express.Router()

// Utility for changing case
var changeCase = require('../../lib/change-case')
// Create a user
router.post('/', function(req, res) {
  debug('POST ' +  req.path, req.body)
  var values = changeCase(req.body)

  if (!req.session.user) {
    res.send(401)
  }

  db.insert('schedule', values, function(error, id) {
    if (error) {
      debug('DB Error', error)
      return res.status(500).send({ error })
    }

    // Make a URL string
    var uri = req.originalUrl + '/' + id;

    // Redirect
    res.location(uri).status(201).send(uri)

  })

})

module.exports = router
