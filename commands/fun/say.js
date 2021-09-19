module.exports = {
    name: 'say',
    category: 'fun',
    aliases: ['s'],
    description: 'nói chuyện thông qua bot',
    usage: '<prefix>say <Nội Dung>',
    execute(client, message, args){
        if (message.deletable) message.delete();
            message.channel.send(args.join(' '))
    }
}