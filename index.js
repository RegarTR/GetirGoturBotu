const Discord  = require('discord.js')
const Client = new Discord.Client

Client.on("ready", () => {
    console.log("hazırım!")
})


Client.on("message", (message) => {
    if(message.content == '!köykonum'){
        message.reply("-1751.896 75.00000 -466.739")
    }
})

Client.on("message", (message) => {
    if(message.content == '!sunucu'){
        message.reply("legendWorld.ploudos.me")
    }
})

Client.login("OTI1NzkxNTEyNjg2NjQxMjEy.YcyQiA.frN5I2CuTCJBfJ8td-G6Foav3EE")