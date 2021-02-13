const db = require("quick.db");

module.exports = {
  name: "chatbot",
  run: async(client, message, args) => {
    
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Admin Perms Needed")
    
    if (!args[0]) return message.channel.send("On/Off Chatbot?")
    
    
    
    if (args[0] === 'on') {
      if (!args[1]) return message.channel.send("Mention A Channel Next Time")
      
   await db.set(`chatbot-${message.guild.id}`,true)
   await db.set(`chatbot-channel-${message.guild.id}`,`${message.mentions.channels.first().id}`)
  
      message.channel.send("Chatbot Channel Set")
      
    }
    
    if (args[0] === 'off') {
      await db.delete(`chatbot-${message.guild.id}`)
      await db.delete(`chatbot-channel-${message.guild.id}`)
      
      message.channel.send("Disabled ChatBot")
    }
  }
}