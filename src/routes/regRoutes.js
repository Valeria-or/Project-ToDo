const express = require('express');
const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const Reg = require('../views/Register');
const { User } = require("../../db/models")

const regRoutes = express.Router();

regRoutes.get("/", (req,res) => {
    renderTemplate(Reg, {}, res)
})

regRoutes.post("/", async (req, res) => {
    const { name, login, password } = req.body
    try {
        const hash = await bcrypt.hash(password, 10)
       const user = await User.findOne({where: { login }}) 
       if(user){
        res.json({err: "Такой пользователь уже существует"})
       } else {
        const newUser = await User.create({name, login, password: hash})
        req.session.login = newUser.login;
        req.session.save(() => {
        res.json({ msg: 'Пользователь зарегистрирован' });
      });
       }
    } catch (error) {
        res.send("Ошибка в регистрации пост")
    }
})

module.exports= regRoutes