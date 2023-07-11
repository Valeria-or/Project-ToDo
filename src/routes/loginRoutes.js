const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');
const { User } = require("../../db/models")

const loginRoutes = express.Router();

loginRoutes.get("/", (req,res) => {
    renderTemplate(Login, {}, res)
})

module.exports = loginRoutes