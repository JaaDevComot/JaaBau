import { Collection } from '../../collection.js';

export class Execute extends Collection {
  constructor (m, sock, { db, Function }) {
    super('owner', {
      parameter: '<query>',
      description: 'Set ID group info into config database',
    });
    this.options = {
      permission: 1,
      setup: {
        group: false,
      },
    };
    this.command = ['setidgci'];
    this.execute = async () => {
      if(!m.args[0]) return m.reply(Function.query(m.prefix+m.command, this.helper.parameter))
      m.reply(Function.mess?.['wait'](m.sender));
      db.config.idGroupInfo = m.args[0]
      await m.reply(Function.mess?.['success']('update', m.args[0]));
    };
  };
};