import bug from 'debug'
const debug = bug('rockit-express:routes')

import dotty from 'dotty'
import db from '../lib/db'
import changeCase from '../lib/change-case'

import express from 'express'
const router = express.Router()

router.post('/', function (req, res) {
	debug(req.body);

	debug(`POST ${req.path}`, req.body)
  const payload = dotty.get(req, 'body')

  db.insert('user', changeCase(payload), (error, id) => {
    if (error) {
      return res.status(500).send({ error })
    }

    const uri = `${req.originalUrl}/${id}`

    req.session.user = payload
    res.redirect('/#thankyou')
  })
})

export default router
