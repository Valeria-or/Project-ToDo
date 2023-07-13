const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const DeckW = require('../views/Deck');
const { User, OneList, Tracker, Day } = require("../../db/models");
const OneLists = require("../views/OneList")
const Days = require("../views/Day")

const trackerRoutes = express.Router();

trackerRoutes.get("/", async (req,res) => {
    const login = req.session.login
    const user = await User.findOne({where: {login} })
    const userId = user.id
    const deck = await Tracker.findAll({where: {user_id:userId }})
    const button = "Создайте новый трекер привычек"
    const mes = "трекеров"
    const script = `tracker`
    renderTemplate(DeckW, {login, deck, button, mes, script}, res)
})
trackerRoutes.post("/", async (req, res) => {
    const { title } = req.body
    try {
        const login = req.session.login
        const user = await User.findOne({where: {login} })
        const userId = user.id
        const newTracker = await Tracker.create({ title, user_id:userId })
        await Day.create({1: false, 2:false, 3:false,4:false,5:false,6:false,7:false,8:false,9:false,10:false,11:false,12:false,13:false,14:false,15:false,16:false,17:false,18:false,19:false,20:false,21:false,22:false,23:false,24:false,25:false,26:false,27:false,28:false,29:false,30:false, tracker_id:newTracker.id})
        if(newTracker){
            res.json({mes: "успешно"})
        } else {
            res.json({err: "no"})
        }
    } catch (error) {
        res.send("Ошибка в deck пост")
    }
})

trackerRoutes.delete("/", async (req, res) => {
    const { id } = req.body
    const card = await Tracker.destroy({where:{id}})
    if(card !== 1){
        res.json({err: "no"})
    } else {
        res.json({mes: "успешно"})
    }
})

trackerRoutes.get("/:id", async (req, res) => {
    const {id} = req.params
    const login = req.session.login
    const card = await Tracker.findOne({where:{id}})
    const deckId = card.id
    const todo = await Day.findOne({where: {tracker_id: deckId}})
    renderTemplate(Days, {login, card, todo}, res)

})

trackerRoutes.put("/checkbox", async (req, res) => {
    const { day, checked, tracker_id } = req.body
    const checkedBox = await Day.update({[day]: checked },
    { where: { tracker_id } })
    if(checkedBox[0] !== 1){
        res.json({err: "no"})
    } else {
        res.json({mes: "успешно"})
    }
})

module.exports = trackerRoutes