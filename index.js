const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true 
});
const config = require("./config.json");
const db = require("quick.db");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
require('./extmsg.js');

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});



client.login(config.token)