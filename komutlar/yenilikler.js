const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply("\nfly!tavsiye tavsiyeniz komudu eklendi \nMatematik Komutları Eklendi \nfly!emojiler = Sunucunuzdaki emojileri gösterir");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bottaki Yenilikleri Gösterir',
  usage: 'fly!yenilikler'
};