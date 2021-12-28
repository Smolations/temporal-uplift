const { app, BrowserWindow } = require('electron');


function createWindow() {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    }
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
}


app.whenReady().then(() => {
  createWindow();
})
