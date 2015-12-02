import bug from 'debug'
const debug = bug('rockit-express:login')

import dotty from 'dotty'
import db from '../lib/db'
import changeCase from '../lib/change-case'

import express from 'express'
const router = express.Router()

router.post('/login', function (req, res) {
  const payload = dotty.get(req, 'body')
	debug(`POST ${req.path}`, payload)

  db.select('SELECT * FROM user WHERE email=:email AND password=:password', payload, (error, rows) => {
    if (error) {
      return res.status(500).send({ error })
    }

    if (rows.length) {
      req.session.user = rows[0]
      res.cookie('user', rows[0])
      res.redirect('/#exchange')
    } else {
      res.redirect('/#login?fail')
    }

  })
})

router.get('/logout', function (req, res) {
  delete req.session.user
  res.clearCookie('user')
  res.redirect('/')
})

export default router
