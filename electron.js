const electron = require('electron');
const path = require('path');
const url = require('url');
//
let win;
//
function createWindow() {
  win = new electron.BrowserWindow({
    width: 1024,
    height: 768,
    frame: false,
    webPreferences: {
      devTools: true
    }
  });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'dist', 'NPMGui', 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  );
  win.on('closed', () => {
    win = null;
  });
}

electron.app.on('ready', createWindow);
electron.app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    electron.app.quit();
  }
});
electron.app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
