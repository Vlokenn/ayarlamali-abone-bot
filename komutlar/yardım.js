const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
  .setDescription(`
  <:YouTube:939113214409601066> !abonerolayarla <rol> -> Abone rolünü belirlersiniz.
  <:YouTube:939113214409601066> !abonerolsıfırla -> Abone rolünü sıfırlarsınız.
  <:YouTube:939113214409601066> !a <üye> -> Etiketlenmiş üyeye abone rolü verirsiniz.
  <:YouTube:939113214409601066> !a-al <üye> -> Etiketlenmiş üyeden abone rolünü alırsınız.
  `)
  .setFooter(`${message.author.username} tarafından istendi.`)
  .setTimestamp()
  message.channel.send(embed)
        }


exports.conf = {
  aliases: ['help']
};

exports.help = {
  name : "yardım"
};