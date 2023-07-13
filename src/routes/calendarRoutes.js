const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Calendar = require("../views/Calendar")

const calendarRoutes = express.Router();

calendarRoutes.get("/", async (req,res) => {
    const login = req.session.login
    renderTemplate(Calendar, {login}, res)
})

module.exports = calendarRoutes