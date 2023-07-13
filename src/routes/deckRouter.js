const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const DeckW = require('../views/Deck');
const { Deck, User, ToDo } = require("../../db/models");
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
    const deckId = card.id
    const todo = await ToDo.findAll({where: {deck_id: deckId}})
    renderTemplate(DeckList, {login, card, todo}, res)

})
deckRoutes.post("/:id", async (req, res) => {
    const {body} = req.body
    const login = req.session.login
    try {
        const user = await User.findOne({where: {login}})
        const userId = user.id
        const deck = await Deck.findOne({where:{user_id: userId}})
        const deckId = deck.id
        const todo = await ToDo.create({body, deck_id: deckId, checked: false})
    if(todo){
        res.json({mes: "okey"})
    } else {
        res.json({err: "error"})
    }
    } catch (error) {
        res.send("bed")
    }
})

deckRoutes.delete("/todo", async (req, res) => {
    const { id } = req.body
    const todo = await ToDo.destroy({where:{id}})
    if(todo !== 1){
        res.json({err: "no"})
    } else {
        res.json({mes: "успешно"})
    }
})

deckRoutes.put("/todo", async (req, res) => {
    const { id, checked } = req.body
    const checkedBox = await ToDo.update({ checked},
    { where: { id } })
    if(checkedBox[0] !== 1){
        res.json({err: "no"})
    } else {
        res.json({mes: "успешно"})
    }
})

module.exports = deckRoutes

