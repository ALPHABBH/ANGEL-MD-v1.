const _0x3fe951=_0x5623;function _0x4d2f(){const _0x199585=['❌\x20මෙම\x20විධානය\x20භාවිතා\x20කිරීමට\x20ඔබ\x20හිමිකරුවෙකු\x20විය\x20යුතුය.','log','2010861VxzTfw','../config','207VYoldi','Restart\x20the\x20bot','737930QNeuOf','rebot','reboot','🔄\x20බොට්\x20පනස්වීමේදී...','403128pHguUP','child_process','restart','12587820laUnij','⚠️\x20බොට්\x20නැවත\x20පටන්\x20ගන්නා\x20අතරේ\x20දෝෂයක්\x20සිදු\x20විය.\x20කරුණාකර\x20නැවත\x20උත්සාහ\x20කරන්න.','300532LoWejZ','⚠️\x20An\x20error\x20occurred\x20while\x20restarting\x20the\x20bot.\x20Please\x20try\x20again\x20later.','LANG','5599578NBYBtZ','owner','../command','1154720uxbPwh','7OBMehN','4WcLcMA','🔄\x20Restarting\x20the\x20bot...','❌\x20You\x20must\x20be\x20the\x20owner\x20to\x20use\x20this\x20command.','restarting','error'];_0x4d2f=function(){return _0x199585;};return _0x4d2f();}(function(_0x36a1f0,_0x33bdaf){const _0x5a1b6e=_0x5623,_0x39d5fb=_0x36a1f0();while(!![]){try{const _0x4a629c=-parseInt(_0x5a1b6e(0x16c))/0x1+parseInt(_0x5a1b6e(0x166))/0x2+-parseInt(_0x5a1b6e(0x159))/0x3*(-parseInt(_0x5a1b6e(0x16e))/0x4)+parseInt(_0x5a1b6e(0x15d))/0x5+parseInt(_0x5a1b6e(0x169))/0x6*(parseInt(_0x5a1b6e(0x16d))/0x7)+parseInt(_0x5a1b6e(0x161))/0x8*(parseInt(_0x5a1b6e(0x15b))/0x9)+-parseInt(_0x5a1b6e(0x164))/0xa;if(_0x4a629c===_0x33bdaf)break;else _0x39d5fb['push'](_0x39d5fb['shift']());}catch(_0x6b3f14){_0x39d5fb['push'](_0x39d5fb['shift']());}}}(_0x4d2f,0x9deed));function _0x5623(_0x105af6,_0x4a2ecf){const _0x4d2fff=_0x4d2f();return _0x5623=function(_0x562397,_0x59bc50){_0x562397=_0x562397-0x159;let _0x1c83ce=_0x4d2fff[_0x562397];return _0x1c83ce;},_0x5623(_0x105af6,_0x4a2ecf);}const config=require(_0x3fe951(0x15a)),{cmd,commands}=require(_0x3fe951(0x16b)),{sleep}=require('../lib/functions'),{exec}=require(_0x3fe951(0x162)),messages={'EN':{'notOwner':_0x3fe951(0x170),'restarting':_0x3fe951(0x16f),'error':_0x3fe951(0x167)},'SI':{'notOwner':_0x3fe951(0x173),'restarting':_0x3fe951(0x160),'error':_0x3fe951(0x165)}};cmd({'pattern':_0x3fe951(0x163),'alias':[_0x3fe951(0x15e),_0x3fe951(0x15f)],'react':'🐬','desc':_0x3fe951(0x15c),'category':_0x3fe951(0x16a),'filename':__filename},async(_0x58a8ec,_0x3d226a,_0x278b95,{from:_0x8096d7,quoted:_0x56fc67,body:_0x3b50ac,isCmd:_0x38c4eb,command:_0x25012d,args:_0x4708ee,q:_0x17d836,isGroup:_0x31dd66,sender:_0x40df3e,senderNumber:_0x2cb898,botNumber2:_0x4d433,botNumber:_0xe161ec,pushname:_0x31f2ae,isMe:_0x4491ca,isOwner:_0x109a46,groupMetadata:_0x15bc23,groupName:_0x468bd4,participants:_0xfeb9a3,groupAdmins:_0x445568,isBotAdmins:_0x54a96d,isAdmins:_0x157723,reply:_0x11c550})=>{const _0xa64561=_0x3fe951;try{if(!_0x109a46)return _0x11c550(messages[config[_0xa64561(0x168)]]['notOwner']);_0x11c550(messages[config['LANG']][_0xa64561(0x171)]),await sleep(0x5dc),exec('pm2\x20restart\x20all',(_0x349f3b,_0x2bc89a,_0x5f2365)=>{const _0x5e8fe5=_0xa64561;if(_0x349f3b)return console[_0x5e8fe5(0x174)](_0x349f3b),_0x11c550(messages[config[_0x5e8fe5(0x168)]][_0x5e8fe5(0x172)]);console[_0x5e8fe5(0x174)](_0x2bc89a);});}catch(_0x4d5ee3){console[_0xa64561(0x174)](_0x4d5ee3),_0x11c550(messages[config['LANG']][_0xa64561(0x172)]);}});