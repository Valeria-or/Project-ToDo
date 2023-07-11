const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');

const homeRoutes = express.Router();

homeRoutes.get("/", (req,res) => {
    const login = req.session.login
    console.log(req.session.login)
    renderTemplate(Home, {login}, res)
})

module.exports = homeRoutes