const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Profile = require('../views/Profile');
const {User} = require("../../db/models")

const profileRoutes = express.Router();

profileRoutes.get("/", async (req,res) => {
    const login = req.session.login
    const user = await User.findOne({where: {login}})
    renderTemplate(Profile, {login, user}, res)
})

profileRoutes.put("/", async (req,res) => {
    const { name, login } = req.body
    const loginSession = req.session.login
    try {
        console.log("трай в ручке")
            const updateUser = await User.update({name, login},{where: {login:loginSession}})      
            if(updateUser[0] === 1){
                console.log("if v update")
                req.session.login = login;
                res.json({mes: "ура"})
            } else {
                res.json({err: "Login неверный"})
            }
    } catch (error) {
        res.send("Ошибка в login пост")
    }
})

module.exports = profileRoutes