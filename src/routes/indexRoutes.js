const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Start = require('../views/Start');

const indexRoutes = express.Router();

indexRoutes.get("/", (req, res) => {
    renderTemplate(Start, {}, res)
})

module.exports = indexRoutes