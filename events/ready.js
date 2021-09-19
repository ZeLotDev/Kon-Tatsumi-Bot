module.exports = async (client) => {
    console.log(`Đã đăng nhập thành công vào ${client.user.username}. Sẵn sàng kết nối tới ${client.guilds.cache.size} servers. Tổng số ${client.users.cache.size} thành viên`);

    client.user.setActivity(client.config.discord.activity);
};