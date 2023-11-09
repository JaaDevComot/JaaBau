export class GPU {
  constructor (sock, db, id, participants, action, metadata) {
    this.sock = sock;
    this.db = db;
    this.id = id;
    this.participants = participants;
    this.action = action;
    this.metadata = metadata;
  };
  async start () {
    for (const jid of this.participants) {
      try {
        var profile = await this.sock.profilePictureUrl(jid, "image", 3000)
      } catch {
        var profile = "https://lh3.googleusercontent.com/proxy/esjjzRYoXlhgNYXqU8Gf_3lu6V-eONTnymkLzdwQ6F6z0MWAqIwIpqgq_lk4caRIZF_0Uqb5U8NWNrJcaeTuCjp7xZlpL48JDx-qzAXSTh00AVVqBoT7MJ0259pik9mnQ1LldFLfHZUGDGY=w1200-h630-p-k-no-nu"
      };
      if(this.action == "add") {
        if(this.db.group[this.id]?.welcome) {
          return this.sock.sendMessage(this.id, { text: `Halo @${jid.split("@")[0]}, Selamat dalam dalam grup *${this.metadata.subject}*, Semoga betah yah`, contextInfo: { mentionedJid: [jid], externalAdReply: { title: `W E L C O M E`, mediaType: 1, previewType: 0, renderLargerThumbnail: true, thumbnailUrl: profile, sourceUrl: this.db.config?.homepage }, }, }, );
        };
      } else if(this.action == "remove") {
        if(this.db.group[this.id]?.leave) {
          return this.sock.sendMessage(this.id, { text: `Pengguna @${jid.split("@")[0]}, Telah keluar dalam grup *${this.metadata.subject}*`, contextInfo: { mentionedJid: [jid], externalAdReply: { title: `L E A V E`, mediaType: 1, previewType: 0, renderLargerThumbnail: true, thumbnailUrl: profile, sourceUrl: this.db.config?.homepage }, }, }, );
        };
      };
    };
  };
};