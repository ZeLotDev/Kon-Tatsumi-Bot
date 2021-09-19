const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'avatar',
    aliases: ['av'],
    category: 'fun',
    utilisation: '{prefix}avatar',
    usage: 'k!avatar <@tag>',
    execute(client, message, args){
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
        const URL = member.user.avatarURL({ format: 'jpg', dynamic: true, size: 1024 })
        const avatarEmbed = new MessageEmbed()
            .setImage(URL)
            .setURL(URL)
            .setTitle(`${member.user.tag}`)
            .setAuthor('Avatar command', 'https://cdn.discordapp.com/attachments/870319669196759101/888572392136388628/2banner.gf.gif')
            .setTimestamp()
            .setFooter('Chill nhạc cùng zé lót', 'https://cdn.discordapp.com/attachments/870319669196759101/888555888632275015/banner.gif')       
        message.channel.send(avatarEmbed)
    }
}