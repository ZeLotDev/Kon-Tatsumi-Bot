module.exports = {
    name: 'join',
    aliases: ['j'],
    category: 'Music',
    utilisation: '{prefix}join',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.music} - Bạn đang không ở trong voice channel !`);
        message.member.voice.channel.join();
    }
};