import fs from 'fs/promises';
import { readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export class Collection {
  constructor(category, helper = {}) {
    this.category = category;
    this.helper = helper;
  };
  async readFitur () {
    let pathdir = path.join(__dirname, "./commands");
    let fitur = readdirSync(pathdir);
    for (let fold of fitur) {
      for (let filename of readdirSync(__dirname + `/commands/${fold}`)) {
        let plugins = import(path.join(__dirname + `/commands/${fold}`, filename));
        await plugins
      };
    };
  };
  async indexMenu (text, m) {
    const path = `./lib/plugins/commands/`;
    const Cmdlist = [];
    const files = await fs.readdir(path);
    const groups = {};
    for (const file of files) {
      const nestedFile = await fs.readdir(path + file);
      nestedFile.forEach((name) => {
        if(!name.endsWith('.js')) return;
        const names = name.replace(/\.js/g, '');
        Cmdlist.push({
          name: names,
          group: file,
          path: `./commands/${file}/${name}`,
        });
      });
    };
    Cmdlist.forEach((item) => {
      if(!groups[item.group]) groups[item.group] = [];
      groups[item.group].push(item.name);
    });
    for (const group in groups) {
      const member = groups[group].join(`\n• `+m.prefix[0]);
      text += `*${group.toUpperCase()}* (${groups[group].length})\n`
      text += `• ${m.prefix}${member}\n\n`
    };
    return text
  };
};