const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bu komutu kullanmak için gerekli yetkin bulunmamakta.')
const abonerol = db.fetch(`abonerol_${message.guild.id}`)
// Developed by Vloken
const member = message.mentions.members.first()
if(!member) return message.reply('Bir kişi etiketlemelisin.')
  let kod = "`"//developed by vloken
  if(!abonerol) return message.reply('Bir hata oluştu. \n Abone rolün ayarlandığından emin olun.')
message.channel.send(`${member} isimli kullanıcıya ${kod}${message.author.tag}${kod} isimli yetkili tarafından abone rolü verildi.`)
member.roles.add(abonerol)
    message.react("✅")
}

exports.conf = {
  aliases: ['a','abonerol','abonever']
};

exports.help = {
  name : "abone-rol"
};