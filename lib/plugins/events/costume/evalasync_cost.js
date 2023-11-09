import { Collection } from '../../collection.js';
import fsp from 'fs/promises';
import fs, { readFileSync, readdirSync } from 'fs';
import { format } from 'util';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import fetch from 'node-fetch';
import { exec, execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class Execute extends Collection {
  constructor (m, sock, { 
    newWASocket, 
    db, 
    store, 
    Function, 
    attribute
  }) {
    super('costume/function', {
      parameter: '<code>',
      description: 'Run JavaScript code directly',
    });
    this.options = { 
      permission: 1,
      setup: {
        group: false,
      },
      prefix: ">",
    };
    this.special = async (query) => {
      var evaluate = false;
      try {
        evaluate = await eval(`(async () => { ${query} })()`);
        try { 
          evaluate = JSON.stringify(format(evaluate), nul, 2); 
        } catch {}
      } catch (e) {
        evaluate = e.stack.toString();
      };
      await sock.sendMessage(m.chat, { text: await format(evaluate) }, { quoted: m });
    };
  };
};