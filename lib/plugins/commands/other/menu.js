import { Collection } from '../../collection.js';

export class Execute extends Collection {
  constructor (m, sock, { 
    newWASocket,
    db,
    Function
  }) {
    super('other', {
      description: 'Displaying features on bots',
    });
    this.options = {
      permission: 0,
      setup: {
        group: false,
      },
    };
    this.command = ['menu'];
    this.execute = async () => {
      let profile;
      try {
        profile = await sock.profilePictureUrl(m.sender, "image", 3000)
      } catch {
        profile = "https://lh3.googleusercontent.com/proxy/esjjzRYoXlhgNYXqU8Gf_3lu6V-eONTnymkLzdwQ6F6z0MWAqIwIpqgq_lk4caRIZF_0Uqb5U8NWNrJcaeTuCjp7xZlpL48JDx-qzAXSTh00AVVqBoT7MJ0259pik9mnQ1LldFLfHZUGDGY=w1200-h630-p-k-no-nu"
      };
      return sock.sendMessage(m.chat, { 
        text: await this.indexMenu(this.mainMenu(m, sock, db, newWASocket, Function), m),
        contextInfo: {
          mentionedJid: [m.sender, newWASocket.jidNormalizedUser(sock.user.id)],
          externalAdReply: {
            thumbnail: new Uint32Array(Buffer.from(profile)),
            thumbnailUrl: profile,
            renderLargerThumbnail: true,
            mediaType: 1,
          },
        },
      }, { quoted: m });
    };
  };
  mainMenu (m, sock, db, newWASocket, Function) {
    let text = `👥 *Dilihat:* ${Function.formatMoney(Object.keys(db.user).length)} Orang\n`
    text += `📥 *Masuk:* ${Function.formatMoney(db.config.chat)} Pesan\n\n`
    text += `*INFO BOT (@${newWASocket.jidNormalizedUser(sock.user.id).split("@")[0]})*\n`
    text += `*# Bot:*  ${db.config.botName}\n`
    text += `*# Device:* ${newWASocket.getDevice(sock.user.id)}\n`
    text += `*# Date:* ${new Date().toDateString()}\n`
    text += `*# Total Group:* ${Object.keys(db.group).length}\n`
    text += `*# Runtime:* ${Function.runtime(process.uptime())}\n\n`
    text += `*INFO USER (@${m.sender.split("@")[0]})*\n`
    text += `*# Premium:* ${db.user[m.sender].premium ? "*Yes*": "*No*"}\n`
    text += `*# Limit:* ${db.user[m.sender].limit}\n`
    text += `*# Waning:* [${db.user[m.sender].warning}/5]\n`
    text += `*# Banned:* ${db.user[m.sender].banned ? "*Yes*": "*Safe*"}\n`
    text += `*# Hit Command:* ${db.user[m.sender].hit}×\n`
    text += `*# Total Chat:* ${db.user[m.sender].chat} chat\n\n`
    text += `*Tambahkan -i untuk menampilkan informasi pada command, Contoh ${m.prefix}${m.command} -i*\n\n`
    return text;
  };
};