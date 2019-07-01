const Discord = require('discord.js');
const bot = new Discord.Client();
const auth = require('./auth.json');
const PREFIX = '!';

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {

  let args = message.content.substring(PREFIX.length).split(" ");

  let cmd = args[0];

  switch (cmd) {
    case 'leek':
      message.channel.send('Ada yang mau league @everyone?');
      break;
    default:
      break;
  }
});
