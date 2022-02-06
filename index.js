const { app, BrowserWindow } = require('electron');

function createWindow() {
    let win = new BrowserWindow(
            { 
                width:800,
                height:400,
                webPreferences:{nodeIntegration:true} 
            }
        );
    win.loadFile('index.html');
}
app.whenReady().then(createWindow);