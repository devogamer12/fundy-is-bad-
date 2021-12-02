require('http').createServer((req, res) => res.end('Bot is alive!')).listen(3000)

const express = require("express");
const app = express();

app.get("/", async(req,res) => {
  res.send("Bot is online!")
})

app.get("/github", (req,res) => {
  res.redirect("https://github.com/NotFaizen/Poggers-Bot")
})

app.get("/url", (req,res) => {
  res.redirect("https://replit.com/@gofaizen/Poggers-Bot")
})
app.listen(5000, () => {
  console.log("Poggers Bot is up and ready to rumble!")
})


const aoijs = require("aoi.js")
// Bot stuff //
const Aoijs = require("aoi.js")  
const bot = new Aoijs.Bot(require("./Settings/config.js"))
//Events
bot.onMessage()

require('discord-buttons')(bot.client)
global.bot = bot;

bot.loadCommands(`./Commands/`)
