module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.music} - Bạn đang không ở trong voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bạn đang không ở trong voice channel !`);

        if (!args[0]) return message.channel.send(`${client.emotes.music} - Vui lòng cho biết tên bài hát !`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};