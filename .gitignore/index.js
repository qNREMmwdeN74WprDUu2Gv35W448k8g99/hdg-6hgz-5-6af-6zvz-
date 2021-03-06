const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN);
const prefix = ("!")

const ownerID = '337708643900456970';


const ServerStats = {
    guildID: '434850583900454921',
    memberCountID: '472510027912052747',
    botCountID: '472510048732708895',
};


bot.on("ready", () => {
    bot.user.setActivity(`!help | ${bot.users.size} Utilisateurs | ${bot.guilds.size} Serveurs`);
  });
  
  bot.on("guildCreate", guild => {
    bot.user.setActivity(`!help | ${bot.users.size} Utilisateurs | ${bot.guilds.size} Serveurs`);
  });
  
  bot.on("guildDelete", guild => {
    bot.user.setActivity(`!help | ${bot.users.size} Utilisateurs | ${bot.guilds.size} Serveurs`);
  });






bot.on('message', message => {

    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;  

    try {

        delete require.cache[require.resolve(`./commands/${cmd}.js`)];

        let ops = {
            ownerID: ownerID
        }

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(bot, message, args, ops);

    } catch (e) {
        console.log(e.stack);
    }

 });

  bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "🌺accueil🌺").send(`Hey ${member}, Bienvenue chez **Exential - Fortnite communautaire** ! \n \nPour avoir ton grade, rend toi dans le channel ` + bot.channels.get("470282575009546241"));
    if (member.guild.id !== ServerStats.guildID) return;
    bot.channels.get(ServerStats.memberCountID).setName(`Membres : ${member.guild.members.filter(m => !m.user.bot).size}`);
    bot.channels.get(ServerStats.botCountID).setName(`Bot : ${member.guild.members.filter(m => m.user.bot).size}`);
    bot.user.setActivity(`!help | ${bot.users.size} Utilisateurs | ${bot.guilds.size} Serveurs`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/exential_krushhd"
      });
});

bot.on("guildMemberRemove", member => {
    if (member.guild.id !== ServerStats.guildID) return;
    bot.channels.get(ServerStats.memberCountID).setName(`Membres : ${member.guild.members.filter(m => !m.user.bot).size}`);
    bot.channels.get(ServerStats.botCountID).setName(`Bot : ${member.guild.members.filter(m => m.user.bot).size}`);
    bot.user.setActivity(`!help | ${bot.users.size} Utilisateurs | ${bot.guilds.size} Serveurs`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/exential_krushhd"
      });

});
