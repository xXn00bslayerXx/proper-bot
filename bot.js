const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const ms = require("ms");

const config = require("./config.json");

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];

    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

  client.on('guildMemberAdd', member => {
    member.guild.channels.get('515666975964397616').send('**' + member.user.username + '** has joined the server!');
    client.user.setActivity(`with ur dad`);
  });

  client.on("guildMemberRemove", (member) => {
    member.guild.channels.get('515666975964397616').send('**' + member.user.username + '** has left the server! :(');
    client.user.setActivity(`with ur dad`);
  });

client.on("message", async message => {

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }

});

client.login(config.token);
