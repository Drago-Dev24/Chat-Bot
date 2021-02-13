module.exports = {
  name: "ping",
  run: async(client, message, args) => {
    message.channel.send(client.ws.ping + "ms")
  }
}