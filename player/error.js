module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Không có nhạc nào được phát trong server này !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Bạn đang không kết nối đến voice channel nào !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Không thể kết nối đến voice channel, hãy kiểm tra lại các quyền của bot !`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} không có ở quốc gia của bạn! Đang bỏ qua...`);
            break;
        case 'MusicStarting':
            message.channel.send(`Nhạc đang bắt đầu ... vui lòng đợi và thử lại!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Đã xảy ra lỗi ... Lỗi: ${error}`);
    };
};
