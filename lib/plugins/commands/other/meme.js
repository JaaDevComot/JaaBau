import { Collection } from '../../collection.js';

export class Execute extends Collection {
  constructor ( m, sock, { db, Function }) {
    super('other', {
      description: 'random funny memes',
    });
    this.options = {
      permission: 0,
      setup: {
        group: false,
      },
    };
    this.command = ['meme'];
    this.execute = async () => {
      await m.reply(Function.wait(m.sender))
      for(const api of db.config?.apikey) {
        const apiName = Object.keys(api).filter(v => v === 'https://api.zahwazein.xyz')
        const p = await sock.sendMessage(m.chat, { 
          image: { 
            url: api[apiName] ? `https://api.zahwazein.xyz/randomimage/memeindo?apikey=${api[apiName]}` : null 
          }, 
          caption: db.config?.description
        }, { 
          quoted: m 
        });
        p.catch(() => {
          m.reply("Maaf, Tidak ada respon dari server!, Hubungi owner untuk menangani masalah ini")
        });
      };
    };
  };
};