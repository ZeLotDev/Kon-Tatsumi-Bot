module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn đang không ở trong voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Không có nhạc nào đang được phát !`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`${client.emotes.music} - Đã hủy **lặp lại bài hát** !`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`${client.emotes.music} - Đã bật chế độ **lặp lại bài hát** tất cả bài hát sẽ được lặp lại không ngừng nghỉ !`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`${client.emotes.music} - Đã hủy **lặp lại bài hát** !`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`${client.emotes.music} - Đã bật chế độ **lặp lại bài hát** tất cả bài hát sẽ được lặp lại không ngừng nghỉ !`);
            };
        };
    },
};