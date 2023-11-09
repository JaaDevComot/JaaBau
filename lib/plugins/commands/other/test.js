import { Collection } from '../../collection.js';

 export class Execute extends Collection { 
  constructor (m, sock) {
    super('other', {
      description: 'To test the command bot can or not',
    });
    this.options = {
      permission: 0,
      setup: {
        group: false,
      },
    };
    this.command = ['test'];
    this.execute = async () => {
      return sock.sendMessage(m.chat, { text: 'Work As Command' }, { quoted: m });
    };
  };
};