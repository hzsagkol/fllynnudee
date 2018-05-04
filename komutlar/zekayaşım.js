const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    var sans = ["11", "15", "20", "24", "28", "31", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "Albert Einstein Mübarek"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Yaşın___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'zekayaşım',
  description: '',
  usage: 'mkemal!zekayaşım'
};
