import { Collection } from '../../collection.js';
import { User, Group, Config, Werewolf } from '../../index.js';

export class Execute extends Collection {
  constructor (m, sock, { db }) {
    super('branch/function', {
      function: true,
      public: true
    });
    this.editor = {
      exclusive: {
        type: 'add',
        index: 1,
      },
    };
    this.options = {
      permission: 0,
      setup: {
        group: false,
      },
    };
    this.branch = async () => {
      m.savedb = (type) => {
        return {
          user: new User(m).Expose(),
          group: new Group(m).Expose(),
          config: new Config(m).Expose(),
          werewolf: new Werewolf(m).Expose()
        }[type];
      };
      return m;
    };
  };
};