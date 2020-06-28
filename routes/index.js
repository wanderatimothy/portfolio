const express = require('express')
const Router = express.Router()


/**
 * all my  get requests
 * */
Router.get('/', (req, res) => {
    res.render('home.hbs')
})


module.exports = Router