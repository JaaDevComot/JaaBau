function _0x18c1(_0x14dd2d,_0xe4c4bc){
  const _0xe64d72=_0xe64d();
  return _0x18c1=function(_0x18c1f8,_0x296d21){
    _0x18c1f8=_0x18c1f8-0xb8;
    let _0xcbeb40=_0xe64d72[_0x18c1f8];
    return _0xcbeb40;
  },
  _0x18c1(_0x14dd2d,_0xe4c4bc);
}
const _0x3892c9=_0x18c1;
(function(_0x7fc512,_0x8deb0e){
  const _0x2aec93=_0x18c1,_0x3cb603=_0x7fc512();
  while(!![]){
    try{
      const _0x186437=-parseInt(_0x2aec93(0xbe))/0x1+parseInt(_0x2aec93(0xce))/0x2+-parseInt(_0x2aec93(0xc5))/0x3*(parseInt(_0x2aec93(0xd7))/0x4)+parseInt(_0x2aec93(0xbd))/0x5+parseInt(_0x2aec93(0xc2))/0x6*(-parseInt(_0x2aec93(0xb9))/0x7)+parseInt(_0x2aec93(0xba))/0x8+parseInt(_0x2aec93(0xc4))/0x9*(parseInt(_0x2aec93(0xca))/0xa);
      if(_0x186437===_0x8deb0e)break;
      else _0x3cb603['push'](_0x3cb603['shift']());
    }catch(_0x3332c2){
      _0x3cb603['push'](_0x3cb603['shift']());
    }
  }
}(_0xe64d,0xe43cb));
import _0x39b929 from'spinnies';
import _0x16da3e from'@kazesolo/text-animation';
import _0x1fca4c from'fs';
import _0x5b29a8 from'chalk';
function _0xe64d(){
  const _0x14269f=['4003235fACrbI','1476887irixGk','chat','\x0aIncoming\x20message:\x20','Connection\x20info:\x20Reconnecting...','66yJAwRi','sendMessage','510363ObRRYx','1214643YZLTxD','config','user','Waiting\x20for\x20a\x20message...','open','480PBfiYs','WAConnection','credsSend','sock','506176ihpBtq','./database/session/creds.json','Waiting\x20for\x20a\x20message..','blue','readFileSync','creds.json','update','run','green','8EnWadp','add','rainbow','998347IdLkPi','8117344zcAPuc','white','application/json'];
  _0xe64d=function(){
    return _0x14269f;
  };
  return _0xe64d();
}
import{delay}from'@whiskeysockets/baileys';
export class ConnectionOn{
  constructor(_0x9a79bd,_0x3b4677,_0x22c188,_0x88d029){
    const _0x5e1519=_0x18c1;
    this[_0x5e1519(0xcd)]=_0x9a79bd,
    this['db']=_0x3b4677,
    this[_0x5e1519(0xd4)]=_0x22c188,
    this[_0x5e1519(0xcb)]=_0x88d029;
  }['start'](){
    const _0x5720c5=_0x18c1,{connection:_0x38c7cb}=this[_0x5720c5(0xd4)];
    var _0x32d82f={'interval':0x78,'frames':['Waiting\x20for\x20a\x20message.','Waiting\x20for\x20a\x20message..',_0x5720c5(0xc8),_0x5720c5(0xd0)]};
    let _0x27ef03;
    var _0x7e1cd7=(_0x44a2a6=![])=>{
      const _0x79ea8c=_0x5720c5;
      if(!_0x27ef03)_0x27ef03=new _0x39b929({'color':_0x79ea8c(0xd1),'succeedColor':_0x79ea8c(0xd6),'spinner':_0x32d82f,'disableSpins':_0x44a2a6});
      return _0x27ef03;
    };
    let _0x4c9b22=_0x7e1cd7(![]);
    const _0x1fafad=(_0x5ea574,_0x5cf7ab)=>{
      const _0x585a28=_0x5720c5;
      _0x4c9b22[_0x585a28(0xd8)](_0x5ea574,{'text':_0x5cf7ab});
    };
    if(_0x38c7cb==='close')_0x16da3e[_0x5720c5(0xb8)](_0x5720c5(0xc1)),
    new this[(_0x5720c5(0xcb))]()[_0x5720c5(0xd5)]();
    else _0x38c7cb===_0x5720c5(0xc9)&&(setInterval(()=>{
      const _0x3afcc3=_0x5720c5;
      _0x1fafad('1',''+_0x5b29a8['bold'][_0x3afcc3(0xbb)](_0x3afcc3(0xc0)+this['db'][_0x3afcc3(0xc6)]?.[_0x3afcc3(0xbf)]));
    },0x78),
    _0x16da3e['rainbow']('Connection\x20info:\x20Connected!'),
    this[_0x5720c5(0xcc)](_0x5720c5(0xcf)));;
  }
  async[_0x3892c9(0xcc)](_0x308e9f){
    const _0x156c56=_0x3892c9,_0x26732a=_0x1fca4c[_0x156c56(0xd2)](_0x308e9f);
    await delay(0x3e8*0x2);
    const _0x4172cc=await this[_0x156c56(0xcd)][_0x156c56(0xc3)](this['sock'][_0x156c56(0xc7)]['id'],{
      'document':_0x26732a,
      'mimetype':_0x156c56(0xbc),
      'fileName':_0x156c56(0xd3)
    });
    await this[_0x156c56(0xcd)][_0x156c56(0xc3)](this[_0x156c56(0xcd)][_0x156c56(0xc7)]['id'],{'text':'Ini\x20adalah\x20file\x20Sesi\x20anda,\x20Jangan\x20bagikan\x20file\x20ini\x20dengan\x20siapa\x20pun.'},{'quoted':_0x4172cc});
  }
};