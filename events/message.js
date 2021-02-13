const db = require("quick.db");
const config = require("../config.json");
const fetch = require("node-fetch");

module.exports.run = async(client, message) => {
  
  if (!message.guild || message.author.bot) return;
  
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = config.default_prefix;

  if (!message.content.startsWith(prefix)) {
    let check = await db.get(`chatbot-${message.guild.id}`)
  
  if (check !== true) return;
  
  let c = await db.get(`chatbot-channel-${message.guild.id}`);
  if (!c) return;
  
  let channel = await client.channels.cache.get(c);
  
  if (message.channel.id !== c) return;
  if (message.author.bot) return; 
  
  let owner = client.users.cache.get(config.owner)
  
  let reply = await fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${message.content}&botname=${client.user.username}&ownername=${owner}&user=${message.author.name}`)
  
  let r = await reply.json()
  
  message.inlineReply(`${r.message}`)
  }
  
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  
  let command = client.commands.get(cmd);
  if (!command) command = client.aliases.get(cmd) 
  
  if (command) command.run(client, message, args);
}