const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Start = require('../views/Start');

const indexRoutes = express.Router();

indexRoutes.get("/", (req, res) => {
    renderTemplate(Start, {}, res)
})

indexRoutes.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('ToDo-Project');
        res.redirect('/');
    });
    
})

module.exports = indexRoutes