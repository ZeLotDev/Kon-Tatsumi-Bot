const { audioUrl, getAudioUrl } = require('google-tts-api');
module.exports = {
    name: "speak",
    aliases: ['s', 'talk'],
    category: 'info',
    async execute(client, message, args){
        if (!args[0]) return message.channel.send('Vui lòng nhập nội dung cần nói!');
        const string = args.join(' ');
        if (string.length > 500) return message.channel.send('Vui lòng nhập dưới 500 từ');
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.reply('Bạn cần vào voice để dùng lệnh!')
        const audioUrl = await getAudioUrl    (string, {
            lang: 'vi',
            slow: false,
            host: 'https://translate.google.com',
            timeout: 10000
        });
        try {
            voiceChannel.join().then(connetion => {
                const dispatcher = connetion.play(audioUrl);
            });
        }
        catch(e) {
            message.channel.send('Bot lỗi vui lòng thử lại sau!');
            console.error(e);
        };
    }
}