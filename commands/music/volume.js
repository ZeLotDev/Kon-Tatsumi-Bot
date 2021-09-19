module.exports = {
    name: 'volume',
    aliases: ['v'],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.music} - Bạn đang không ở trong voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.music} - Không có bài nhạc nào đang được phát !`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - Hãy nhập 1 con số hợp lệ !`);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(`${client.emotes.error} - Hãy nhập một con số hợp lệ giữa 1-100 !`);

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.channel.send(`🔊 - Âm lượng đã được chỉnh thành **${parseInt(args[0])}%** !`);
    },
};