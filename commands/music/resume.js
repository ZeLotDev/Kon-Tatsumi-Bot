module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn đang không ở trong voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bạn đang không kết nối đến với channels chung của bot !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Không có nhạc nào được phát !`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Bài nhạc này đã được chơi !`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - Bài nhạc ${client.player.getQueue(message).playing.title} đã được tiếp tục !`);
    },
};