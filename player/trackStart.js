module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Bắt đầu chơi **${track.title}** `);
    message.channel.send({
        embed: {
            color: 'PURPLE',
            author: { name: track.title },
            footer: { text: '😎 Chill nhạc cùng zé lót' },
            fields: [
                { name: '🌈 Từ Kênh', value: track.author, inline: true },
                { name: '😏 Lượt xem', value: track.views, inline: true },
                { name: '🕒 Thời gian', value: track.duration, inline: true },
            ],
        thumbnail: { url: track.thumbnail },
        timestamp: new Date(),
        },
    })
};

