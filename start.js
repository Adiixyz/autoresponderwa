//created by adii
const wa = require('@open-wa/wa-automate');

wa.create({
  sessionId: "session",
  authTimeout: 60, //wait only 60 seconds to get a connection with the host account device
  blockCrashLogs: true,
  disableSpins: true,
  headless: true,
  hostNotificationLang: 'PT_BR',
  logConsole: false,
  popup: true,
  qrTimeout: 3, //when setted to 0 it will wait forever for you to scan the qr code
}).then(client => start(client));

function start(client) {
  client.onMessage(async message => {
    if (message.body === 'Hi') {
      await client.sendText(message.from, '👋 Hello!');
    }    if (message.body === 'Assalamualaikum') {
        await client.sendText(message.from, 'Waalaikumsalam');
      }  if (message.body === '.hello') {
      await client.sendText(message.from, 'Hello there!\n\nIm Auto Responder Bot');
    }
  });
}
