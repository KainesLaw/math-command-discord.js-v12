const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    //change everything here to your choosing
    name: "math",
    category: "Utility",
    description: "Get the answer to a math problem",
    cooldown: 5,
    aliases: ['calculate', 'math', `calc`],
    usage: "math <equation>",
    //dont go further unless you know what you're doing


    async run (client, message, args){

        if(!args[0]) return message.channel.send('Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** question')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}
