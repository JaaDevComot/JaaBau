import { Collection } from '../../collection.js';

export class Execute extends Collection {
  constructor (m, sock, { db, Function }) {
    super ('owner', {
      parameter: '<number>',
      description: 'Add premium users to the bot database',
    })
    this.command = ['addprem']
    this.execute = async () => {
      if(!m.args[0]) return m.reply(Function.query(m.prefix+m.command, this.helper.parameter))
      if(!m.args[0] === "@") return m.reply("Maaf perintah yang masukan salah, Harap hapus tanda @")
      if(!m.args[0] === "08") return m.reply("Maaf perintah yang masukan salah, Gunakan 628, Bukan 08")
      if(!m.args[0] === "@s.whatsapp.net") return m.reply("Maaf perintah yang masukan salah, Tolong jangan di tambahin '@s.whatsapp.net'")
      db.config?.prems?.push(m.args[0])
      m.reply(`Berhasil menambahkan ${m.args[0]} ke dalam database premium`)
    }
  }
}