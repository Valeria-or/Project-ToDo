const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Deck = require('../views/Deck');

const deckRoutes = express.Router();

deckRoutes.get("/", (req,res) => {
    const login = req.session.login
    console.log(req.session.login)
    renderTemplate(Deck, {login}, res)
})

module.exports = deckRoutes