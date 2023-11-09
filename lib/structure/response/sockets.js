import PhoneNumber from 'awesome-phonenumber';

export class Sockets {
  constructor (m, sock, Function, store, newWASocket) {
    this.m = m;
    this.sock = sock;
    this.Function = Function;
    this.store = store;
    this.newWASocket = newWASocket;
  };
  async Socket_Utils_1 () {
    this.sock.getName = (jid = '', withoutContact = false) => {
      jid = this.Function?.decodeJid(jid)
      withoutContact = this.withoutContact || withoutContact
      let v
      if (jid.endsWith('@g.us')) return new Promise(async (resolve) => {
        v = this.sock.chats[jid] || {}
        if (!(v.name || v.subject)) v = await this.sock.groupMetadata(jid) || {}
        resolve(v.name || v.subject || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international'))
      })
      else v = jid === '0@s.whatsapp.net' ? { jid, vname: 'WhatsApp' } : this.newWASocket.areJidsSameUser(jid, this.sock.user.id) ? this.sock.user : (this.sock.chats[jid] || {})
      return (withoutContact ? '' : v.name) || v.subject || v.vname || v.notify || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    };
    this.sock.waChatKey = (pin) => ({ 
      key: (c) => (pin ? (c.pin ? '1' : '0') : '') 
      + (c.archive ? '0' : '1') 
      + (c.conversationTimestamp ? c.conversationTimestamp.toString(16).padStart(8, '0') : '') 
      + c.id, compare: (k1, k2) => {
        k2.localeCompare(k1)
      }
    });
    return this.sock;
  };
};