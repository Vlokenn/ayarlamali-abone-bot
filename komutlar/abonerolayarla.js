const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bu komutu kullanmak için gerekli yetkin bulunmamakta.')
const rol = message.mentions.roles.first()
if(!rol) return message.reply('Bir rol etiketlemelisin!')
db.set(`abonerol_${message.guild.id}`, rol.id)
  const emb = new Discord.MessageEmbed()
  .setAuthor(`Abone Rol`)
  .setDescription(`Abone Rol Başarıyla ${rol} Olarak Ayarlandı!`)
    message.react("✅")
  message.reply(emb)
        }


exports.conf = {
  aliases: ['abone-ayarla','aboneayarla','abonerol-ayarla']
};

exports.help = {
  name : "abonerolayarla"
};