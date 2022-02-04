const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
const abonerol = db.fetch(`abonerol_${message.guild.id}`)
// Bu js Vloken tarafından yapılmıştır.
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bu komutu kullanmak için gerekli yetkin bulunmamakta.')
const member = message.mentions.members.first()
if(!member) return message.reply('Bir kişi etiketlemelisin.')
  let kod = "`"
  if(!abonerol) return message.reply('Bir hata oluştu. \n Abone rolün ayarlandığından emin olun.')
message.channel.send(`${member} adlı kullanıcısının abone rolü ${kod}${message.author.tag}${kod} isimli yetkili tarafından alındı!`)
member.roles.remove(abonerol)
}

exports.conf = {
  aliases: ['a-al','abonerol-al','aboneal']
};

exports.help = {
  name : "abone-al"
};