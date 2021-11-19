const Discord = require('discord.js');

exports.run = async (client, message, args) => {
// Bu js Vloken tarafından yapılmıştır.
message.channel.send('yt vloken')
}

exports.conf = {
  aliases: ['help']
};

exports.help = {
  name : "yardım"
};