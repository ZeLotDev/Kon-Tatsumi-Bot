module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'ORANGE',
            author: { name: `⛄ Đây là kết quả tìm kiếm của bạn cho **${query}**` },
            footer: { text: '😎 Nhạc chill cùng zé lót' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};