exports.run = (client, message, args) =>  {
  if (message.member.roles.find(role => role.name === "Mod")) {
    let kPlayer = message.mentions.members.first();
    let reason = args.slice(1).join(" ");

    message.channel.send({embed: {
      color: 0xff0000,
      author: {
        name: kPlayer.displayName,
        icon_url: kPlayer.user.avatarURL
      },
      title: "KICKED",
      description: `**Player:** ${kPlayer.displayName} has been kicked\n **Reason: **${reason}`,
      timestamp: new Date(),
      footer: {
        icon_url: message.member.user.avatarURL,
        text: `Kicked by ${message.member.displayName}`
      }
    }
    });
  kPlayer.kick();
  }
}
