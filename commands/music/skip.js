module.exports = {
    name: 'skip',
    aliases: ['s'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn đang không có ở trong voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Không có nhạc nào được phát !`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`${client.emotes.success} - Bài nhạc đã được **bỏ qua** !`);
    },
};