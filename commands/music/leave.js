module.exports = {
    name: 'leave',
    aliases: ['l'],
    category: 'Music',
    utilisation: '{prefix}leave',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.music} - Bạn đang không ở trong voice channel !`)
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bạn đang không ở chung voice với bot !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.music} - Không có bài nhạc nào được phát !`);

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success) message.channel.send(`${client.emotes.music} - **Đã ngắt kết nối !**`);
    },
};