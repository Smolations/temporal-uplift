const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1500,
    height: 1000,
    webPreferences: {
      preload: MAIN_PRELOAD_WEBPACK_ENTRY,
    }
  });

  mainWindow.webContents.openDevTools();
  mainWindow.loadURL(MAIN_WEBPACK_ENTRY);
}


app.whenReady().then(() => {
  createWindow();
})
