const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');
const { User } = require("../../db/models")

const loginRoutes = express.Router();

loginRoutes.get("/", (req,res) => {
    renderTemplate(Login, {}, res)
})

loginRoutes.post("/", async (req,res) => {
    const { login, password } = req.body
    try {
        const user = await User.findOne({where: {login}})
        if(user){
            if(user.password === password){
                res.json({mes: "ура"})
            } else {
                res.json({err: "Пароль неверный"})
            }
        } else {
            res.json({err: "Пользователя не существует"})
        }
    } catch (error) {
        res.send("Ошибка в login пост")
    }
})

module.exports = loginRoutes