const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setDescription('')
  .setColor("RANDOM")
  .addField(` \nfly!avatarım = Avatarınızı Gösterir. \nfly!çayiç = Çay İçersiniz. \nfly!çekiç [@username] = Kişiye Çekiç Atar. \nfly!espri = Espri Yaparsınız. \nfly!herkesebendençay = Herkese Çay Ismarlarsınız. \nfly!koş = Koşarsınız. \nfly!kullanıcilgim = Kullanı Bilginizi Gösterir. \nfly!sor = Sorduğunuz Sorunuza Evet Hayır Belki cevapları verir. \nfly!sunucubilgi = Sunucu Bilgisini Gösterir. \nfly!sunucuresmi = Sunucu Resmi Gösterir. \nfly!taskağıtmakas = Taş Kağıt Makas Oynarsınız. \nfly!yaz = Bota İstediğinizi Yazdırır. \nfly!yazıtura = Yazı Tura Oynarsınız. \nfly!zekayaşım = Zeka Yaşınızı Söyler.`)

  
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardımeğlence',
  description: 'Eğlence Komutlarını Gösterir.',
  usage: 'fly!eğlence'
};
