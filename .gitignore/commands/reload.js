exports.run = (bot, message, args, ops) => {

    if (message.author.id !== ops.ownerID) return message.channel.send('seul <@337708643900456970> peut exécuter cette commande !');

    try {

        delete require.cache[require.resolve(`./${args[0]}.js`)];

    } catch (e) {

        return message.channel.send(`Unable to reload: ${args[0]}`);

    }

    message.channel.send(`Successfully reloaded: ${args[0]}`);
}