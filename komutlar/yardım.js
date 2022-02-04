const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
const abonerol = db.fetch(`abonerol_${message.guild.id}`)
// Bu js Vloken tarafından yapılmıştır.
const member = message.mentions.members.first()
if(!member) return message.reply('Bir kişi etiketlemelisin.')
  if(!abonerol) return message.reply('Bir hata oluştu. \n Abone rolün ayarlandığından emin olun.')
message.channel.send(`${message.author.tag} isimli kişi ${member} kişisine başarıyla abone rolü verdi!`)
member.roles.add(abonerol)
}

exports.conf = {
  aliases: ['a','abonerol','abonever']
};

exports.help = {
  name : "abone-rol"
};