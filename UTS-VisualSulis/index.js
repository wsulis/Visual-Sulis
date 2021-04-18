console.log('From Kalkulator');

const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');

const newWindowBtnKal = document.getElementById('newWindowBtnKal');
const newWindowBtnKon = document.getElementById('newWindowBtnKon');

newWindowBtnKal.addEventListener('click', function(event){
    let winTwo = new BrowserWindow();
    winTwo.loadURL(url.format({
        pathname: path.join(__dirname, 'kal.html'),
        protocol: 'file',
        slashes: true
    }));
})

newWindowBtnKon.addEventListener('click', function(event){
    let winThree = new BrowserWindow();
    winThree.loadURL(url.format({
        pathname: path.join(__dirname, 'konver.html'),
        protocol: 'file',
        slashes: true
    }));
})