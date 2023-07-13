const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const DeckW = require('../views/Deck');
const { User, OneList, List } = require("../../db/models");
const OneLists = require("../views/OneList")

const listRoutes = express.Router();

listRoutes.get("/", async (req,res) => {
    const login = req.session.login
    const user = await User.findOne({where: {login} })
    const userId = user.id
    const deck = await List.findAll({where: {user_id:userId }})
    const button = "Создайте новый лист"
    const mes = "листов"
    const script = `list`
    renderTemplate(DeckW, {login, deck, button, mes, script}, res)
})

listRoutes.post("/", async (req, res) => {
    const { title } = req.body
    try {
        const login = req.session.login
        const user = await User.findOne({where: {login} })
        const userId = user.id
        const newList = await List.create({ title, user_id:userId })
        if(newList){
            res.json({mes: "успешно"})
        } else {
            res.json({err: "no"})
        }
    } catch (error) {
        res.send("Ошибка в deck пост")
    }
})

listRoutes.delete("/", async (req, res) => {
    const { id } = req.body
    const card = await List.destroy({where:{id}})
    if(card !== 1){
        res.json({err: "no"})
    } else {
        res.json({mes: "успешно"})
    }
})

listRoutes.get("/:id", async (req, res) => {
    const {id} = req.params
    const login = req.session.login
    const card = await List.findOne({where:{id}})
    const deckId = card.id
    const todo = await OneList.findAll({where: {list_id: id}})
    renderTemplate(OneLists, {login, card, todo}, res)

})

listRoutes.post("/:id", async (req, res) => {
    const {title, id} = req.body
    const login = req.session.login
    try {
        const user = await User.findOne({where: {login}})
        const userId = user.id
        const deck = await List.findOne({where:{user_id: userId}})
        const deckId = deck.id
        const todo = await OneList.create({title, list_id: id})
    if(todo){
        res.json({mes: "okey"})
    } else {
        res.json({err: "error"})
    }
    } catch (error) {
        res.send("bed")
    }
})

listRoutes.delete("/onelist", async (req, res) => {
    const { id } = req.body
    const todo = await OneList.destroy({where:{id}})
    if(todo !== 1){
        res.json({err: "no"})
    } else {
        res.json({mes: "успешно"})
    }
})
module.exports = listRoutes