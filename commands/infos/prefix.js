module.exports = {
    name: 'prefix',
execute(client, message) {
    if (message.mentions.has(client.user)) {
        message.channel.send('**Prefix** của bot là : {prefix}');
    }
}};