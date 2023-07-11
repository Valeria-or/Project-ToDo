const express = require('express');
const bcrypt = require('bcrypt');
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
            const checkPass = await bcrypt.compare(password, user.password)
            if(checkPass){
            req.session.login = user.login;
            req.session.save(() => {
                res.json({mes: "ура"})
            })
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