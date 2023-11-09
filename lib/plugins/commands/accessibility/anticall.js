import { Collection } from '../../collection.js';

export class Execute extends Collection {
  constructor (m, sock, {
    newWASocket, 
    db, 
    store, 
    Function, 
    attribute
  }) {
    super('owner', {
      parameter: '<on/off>',
      description: 'Call detector to detect WhatsApp phone calls',
    });
    this.options = {
      permission: 1,
      setup: {
        group: false,
      },
    };
    this.command = ['anticall'];
    this.execute = async () => {
    const handler = await Function.pluginLoader('../plugins/events'); 
      const properties = { 
        newWASocket, 
        db, 
        store, 
        Function, 
        attribute
      };
      new handler.simpledb_branch.Execute(m, sock, properties).branch();
      if(!m.args.length < 0) return m.reply(Function.query(m.prefix+m.command, '<on/off>'));
      if(m.args == 'on') {
        db.config.anticall = true;
        return sock.sendMessage(m.chat, { text: "Mode Anti Call: AKTIF" }, { quoted: m });
      } else if(m.args == 'off') {
        db.config.anticall = false;
        return sock.sendMessage(m.chat, { text: "Mode Anti Call: MATI" }, { quoted: m });
      };
    };
  };
};