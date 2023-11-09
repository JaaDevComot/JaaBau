import { Collection } from '../../collection.js';

export class Execute extends Collection {
  constructor (m, sock, { attribute }) {
    super('owner', {
      description: 'to check the group link',
    });
    this.options = {
      permission: 2,
      setup: {
        group: true,
      },
    };
    this.command = ['linkgc'];
    this.execute = async () => {
      let linkgc = `di group`
      linkgc = await sock.groupInviteCode(m.chat)
      m.reply('https://chat.whatsapp.com/'+linkgc)
  };
 };
};