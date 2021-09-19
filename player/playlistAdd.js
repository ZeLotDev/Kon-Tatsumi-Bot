module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - Danh sách **${playlist.title}** đã được thêm vào danh sách chờ tổng cộng (**${playlist.tracks.length}** bài nhạc) !`);
};