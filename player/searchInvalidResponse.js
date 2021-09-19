module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Lựa chọn đã bị **hủy bỏ** !`);
    } else message.channel.send(`${client.emotes.error} - Bạn phải gửi một số hợp lệ từ ** 1 ** đến **${tracks.length}** !`);
};