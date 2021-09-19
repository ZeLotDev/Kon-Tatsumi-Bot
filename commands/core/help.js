module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'PURPLE',
                    author: { name: `📙 Bảng lệnh` },
                    footer: { text: '😎 Chill nhạc cùng zé lót' },
                    fields: [
                        { name: '🤖 Bot', value: '`ping`' },
                        { name: '🎶 Lệnh Nhạc', value: music },
                        { name: '😄 Lệnh fun', value: '`speak`,`avatar`,`say`' },
                    ],
                    timestamp: new Date(),
                    description: `Để sử dụng các lệnh. Hãy dùng lệnh theo mẫu ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Tôi không thể tìm thấy lệnh này !`);

            message.channel.send({
                embed: {
                    color: 'PURPLE',
                    author: { name: '📙 Bảng Lệnh' },
                    footer: { text: '😎 Chill nhạc cùng zé lót' },
                    fields: [
                        { name: '👹Tên', value: command.name, inline: true },
                        { name: '✨Thể loại', value: command.category, inline: true },
                        { name: '📖Danh', value: command.aliases.length < 1 ? 'Không có' : command.aliases.join(', '), inline: true },
                        { name: '📅Câu lệnh', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Tìm thông tin về lệnh.\n `[]`, số tùy ý `<>`.',
                }
            });
        };
    },
};