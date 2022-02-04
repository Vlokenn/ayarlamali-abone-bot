const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bu komutu kullanmak için gerekli yetkin bulunmamakta.')
db.delete(`abonerol_${message.guild.id}`)
  const emb = new Discord.MessageEmbed()
  .setAuthor(`Abone Rol`)
  .setDescription(`Abone Rol Başarıyla Sıfırlandı! `)
  message.reply(emb)
        }


exports.conf = {
  aliases: ['abone-sıfırla','abonesıfırla','abonerol-sıfırla']
};

exports.help = {
  name : "abonerolsıfırla"
};