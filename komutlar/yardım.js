const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor("RANDOM")
  .addField("**Eğlence ve Kullanıcı Komutları:**", "\nfly!sor = Sorunuza EVET HAYIR BELKİ cevaplarını verir. \nfly!herkesebendençay = Herkese Çay Alırsınız. \nfly!koş = Koşarsınız.\nfly!çayiç = Çay İçersiniz. \nfly!çekiç = İstediğiniz Kişiye Çekiç Atarsınız.\nfly!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nfly!sunucuresmi = BOT Sunucunun Resmini Atar. \nfly!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nfly!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \nfly!yazıtura = Yazı Tura Oynarsınız. \nfly!taskağıtmakas = Taş Kağıt Makas Oynarsınız. \nfly!zekayaşım = zekayaşınızı gösterir. \nfly!tavsiye tavsiyeniz = Yapımcıya Tavsiye Yollarsınız. \nfly!emojiler = sunucu emojilerini gösterir. \nfly!havadurumu <şehirismi> = Şehir isminin ilk harfini küçük yazınız.")
  .addField("**Sunucu Yetkilisi Komutları**", "\nfly!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nfly!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nfly!unban = İstediğiniz Kişinin Yasağını Açar. \nfly!sustur = İstediğiniz Kişiyi Susturur.")
  .addField("**Botun Ana Komutları**", "\fly!yardım = BOT Komutlarını Atar. \nfly!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nfly!ping = BOT Gecikme Süresini Söyler. \nfly!davet = BOT Davet Linkini Atar. \nfly!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Matematik Komutları**","fly!topla sayı sayı \nfly!çarp sayı sayı \nfly!çıkar sayı sayı \nfly!böl sayı sayı.")
  .addField("**LİNKLER**", "\n[DESTEK SUNUCUM](https://discord.gg/mAd5Tgn) \n[DAVET LİNKİM](https://discordapp.com/oauth2/authorize?client_id=440900577938112514&scope=bot&permissions=8)")
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
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'fly!yardım [komut]'
};
