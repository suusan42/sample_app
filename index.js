const { app, BrowserWindow } = require('electron');

const html =    '<html>'
            +   '<head><title>HTML STRING</title></head>'
            +   '<body><h1>HTML STRING</h1><p>This is string content.</p><body>'
            +   '</html>';

function createWindow() {
    let win = new BrowserWindow(
            { 
                width:800,
                height:400,
                webPreferences:{nodeIntegration:true} 
            }
        );
        win.loadURL('data:text/html;charset=utf-8,' + html);
    }
app.whenReady().then(createWindow);