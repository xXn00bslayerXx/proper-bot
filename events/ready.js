exports.run = (client) => {
  const config = require("../config.json");
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity('with ur dad');
}
