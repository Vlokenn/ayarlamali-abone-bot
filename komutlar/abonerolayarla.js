const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db');

exports.run = async (client, message, args) => {
const rol = message.mentions.roles.first()
db.set(`abonerol_${message.guild.id}`, rol.id)
  const emb = new Discord.MessageEmbed()
  .setAuthor(`Abone Rol`)
  .setDescription(`Abone Rol Başarıyla ${rol} Olarak Ayarlandı!`)
  message.reply(emb)
        }


exports.conf = {
  aliases: ['abone-ayarla','aboneayarla','abonerol-ayarla']
};

exports.help = {
  name : "abonerolayarla"
};