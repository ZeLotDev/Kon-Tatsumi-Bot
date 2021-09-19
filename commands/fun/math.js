const { Client, Message, MessageEmbed } = require("discord.js");
const math = require('mathjs');
module.exports = {
    name: "math",
    aliases: ['m'],
    description: "giải toán online =))",
    execute(client, message, args){
        try {
            message.channel.send(
                new MessageEmbed()
                .addField('Giải toán', args.join())
                .addField('Câu trả lời', math.evaluate(args.join(" ")))
            )
        } catch (err) {
            message.channel.send('Không tìm thấy đáp án vui lòng nhập lại!')
        }
    }
};