const db = require("quick.db");

module.exports = {
  name: "prefix",
  run: async(client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You don\'t have permission to use that.');   
                    if(!args[0]) return message.channel.send('Please provide a new prefix');    
                    if(args[1]) return message.channel.send('The prefix can\'t have two spaces');  
                    db.set(`prefix_${message.guild.id}`, args[0])   
                    message.channel.send(`Succesffully set new prefix to **${args[0]}**`)  
  }
}