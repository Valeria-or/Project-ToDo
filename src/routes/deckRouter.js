const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const DeckW = require('../views/Deck');
const { Deck, User } = require("../../db/models");
const DeckList = require('../views/DeckList');

const deckRoutes = express.Router();

deckRoutes.get("/", async (req,res) => {
    const login = req.session.login
    const user = await User.findOne({where: {login} })
    const userId = user.id
    const deck = await Deck.findAll({where: {user_id:userId }})
    renderTemplate(DeckW, {login, deck}, res)
})

deckRoutes.post("/", async (req, res) => {
    const { title } = req.body
    try {
        const login = req.session.login
        const user = await User.findOne({where: {login} })
        const userId = user.id
        console.log(userId)
        const newDeck = await Deck.create({ title, user_id:userId })
        if(newDeck){
            res.json({mes: "успешно"})
        } else {
            res.json({err: "no"})
        }
    } catch (error) {
        res.send("Ошибка в deck пост")
    }
})

deckRoutes.delete("/", async (req, res) => {
    const { id } = req.body
    console.log(req.body)
    const card = await Deck.destroy({where:{id}})
    if(card !== 1){
        res.json({err: "no"})
    } else {
        res.json({mes: "успешно"})
    }
})

deckRoutes.get("/:id", async (req, res) => {
    const {id} = req.params
    const login = req.session.login
    const card = await Deck.findOne({where:{id}})
    const title = card.title
    renderTemplate(DeckList, {login, title}, res)

})

module.exports = deckRoutes