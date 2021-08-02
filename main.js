const { app, BrowserWindow } = require('electron')
const https = require('https')

const options = {
  hostname: 'localhost',
  port: 8888,
  path: '/',
  method: 'GET'
}

function createWindow(serverData) {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  win.loadURL('http://127.0.0.1:8888')
}
  
app.whenReady().then(() => {
  asd = 'sadfasdasdasd'
  createWindow(asd)
})