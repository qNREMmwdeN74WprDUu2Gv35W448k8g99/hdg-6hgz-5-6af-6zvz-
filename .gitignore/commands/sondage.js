const Discord = require('discord.js');
const bot = new Discord.Client();

exports.run = (bot, message, args, tools) => {

    if (message.member.hasPermission("MANAGE_MESSAGES")){
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        var embed = new Discord.RichEmbed()
            .setDescription("Sondage")
            .addField(thingToEcho, "Répondre avec :heavy_check_mark: ou :x: ")
            .setColor("0xB40404")
            .setTimestamp()
        message.guild.channels.find("name", "💥sondages💥").sendEmbed(embed)
        .then(function (message) {
            message.react("❌")
            message.react("✔")
        }).catch(function(){
        });
    }else{
        return message.reply("Tu n'as pas la permission de créer un sondage.")
    }

}