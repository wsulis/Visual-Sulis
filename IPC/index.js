const ipc = require('electron').ipcRenderer;
const asyncBtn = document.getElementById('asyncBtn');
const syncBtn = document.getElementById('syncBtn');

asyncBtn.addEventListener('click', function(){
    console.log('async masg 1')
    ipc.send('async-message');
    console.log('async msg 2')
});

ipc.on('async-message-reply', function(event, arg){
    const message = 'Message reply: ${arg'
    console.log(message);
});

syncBtn.addEventListener('click', function(){
    console.log('sync masg 1')
    const reply = ipc.sendSync('sync-message');
    console.log(reply);
    console.log('sync msg 2')
})

ipc.on('async-reply', function(event, arg){
    console.log(arg)
})

const BrowserWindow = electron.remote.BrowserWindow
let window = new BrowserWindow()
window.loadURL('http://github.com')