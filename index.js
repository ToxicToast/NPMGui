const electron = require('electron');
const path = require('path');
const url = require('url');
const shellExec = require('shell-exec');
//
let win;
//
function createWindow() {
  win = new electron.BrowserWindow({
    width: 1024,
    height: 768,
    frame: true,
    webPreferences: {
      devTools: true
    }
  });
  win.webContents.openDevTools();
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
//
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
//
electron.ipcMain.on('get-global-packages', event => {
  shellExec('npm list -g --depth 0 --json').then(packages => {
    event.sender.send('set-global-packages', packages);
  }).catch(console.error);
});
//
electron.ipcMain.on('check-package-version', (event, args) => {
  shellExec(`npm view ${args} version`).then(version => {
    event.sender.send('checked-package-version', version);
  }).catch(console.error);
});
//
electron.ipcMain.on('get-outdated-packages', event => {
  shellExec(`npm outdated --json`).then(packages => {
    event.sender.send('set-outdated-packages', packages);
  }).catch(console.error);
});
