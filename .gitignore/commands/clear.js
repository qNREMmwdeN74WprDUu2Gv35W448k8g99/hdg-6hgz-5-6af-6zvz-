exports.run = (bot, message, args, tools) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Vous n'avez pas la permission d'utiliser cette commande !")

    if (isNaN(args[0])) return message.channel.send("**Vous n''avez pas précisé le nombre de messages à supprimer**");

    if (args[0] > 100) return message.channel.send('**Vous ne pouvez pas clear plus de 100 messages en une fois.**');

    message.channel.bulkDelete(args[0])
      .then(messages => message.channel.send(`**Successfully deleted \`${messages.size}/${args[0]}\` messages**`).then(msg => msg.delete({
        timeout: 10000
      }))) 
  
  }