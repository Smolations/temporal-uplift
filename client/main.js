const {
  app,
  BrowserWindow,
  Menu,
  MenuItem,
} = require('electron');
const path = require('path');


const isMac = process.platform === 'darwin';
const logoPath = '/Users/Smola/projects/temporal-uplift/client/src/logo_64x64.png';
console.log('logoPath: ', logoPath)


// https://www.electronjs.org/docs/latest/api/menu-item
const template = [
  // { role: 'appMenu' }
  ...(isMac
    ? [
      {
        label: app.name,
        submenu: [
          { role: 'about' },
          { type: 'separator' },
          { role: 'services' },
          { type: 'separator' },
          { role: 'hide' },
          { role: 'hideOthers' },
          { role: 'unhide' },
          { type: 'separator' },
          { role: 'quit' }
        ],
      },
    ]
    : []
  ),
  // { role: 'fileMenu' }
  {
    label: 'File',
    submenu: [
      isMac ? { role: 'close' } : { role: 'quit' },
      { role: 'about' },
    ]
  },
  // { role: 'editMenu' }
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      ...(isMac ? [
        { role: 'pasteAndMatchStyle' },
        { role: 'delete' },
        { role: 'selectAll' },
        { type: 'separator' },
        {
          label: 'Speech',
          submenu: [
            { role: 'startSpeaking' },
            { role: 'stopSpeaking' }
          ]
        }
      ] : [
        { role: 'delete' },
        { type: 'separator' },
        { role: 'selectAll' }
      ])
    ]
  },
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forceReload' },
      { role: 'toggleDevTools' },
      { type: 'separator' },
      { role: 'resetZoom' },
      { role: 'zoomIn' },
      { role: 'zoomOut' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  // { role: 'windowMenu' }
  {
    label: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'zoom' },
      ...(isMac ? [
        { type: 'separator' },
        { role: 'front' },
        { type: 'separator' },
        { role: 'window' }
      ] : [
        { role: 'close' }
      ])
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: async () => {
          const { shell } = require('electron');
          await shell.openExternal('https://github.com/Smolations/temporal-uplift');
        }
      }
    ]
  }
];

const menu = Menu.buildFromTemplate(template);


// **NOTE** the constant names are determined by the
// entrypoints for the main webpack config
//
// ALSO, type "rs" in console to manually reload app
function createWindow() {
  const mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    titleBarOverlay: { // need to manage these manually probably?
      color: '#1b1b1b',
      symbolColor: '#a5d6a7'
    },
    width: 1500,
    height: 1000,
    maximizable: false,
    icon: logoPath,
    webPreferences: {
      // nodeIntegration: true, // why?
      enableRemoteModule: true, // access to main.js stuffs in renderer
      preload: MAIN_PRELOAD_WEBPACK_ENTRY,
      zoomFactor: 3.0,
      defaultEncoding: 'UTF-8', // default: 'ISO-8859-1'
      // maxHeight: 600,
      // maxWidth: 600,
      // minHeight: 400,
      // minWidth: 400,
    }
  });

  // import React from 'react';
  // // how to import the remote module in a React component?
  // const electron = window.require('electron');
  // const remote = electron.remote;
  // const { BrowserWindow, dialog, Menu } = remote

  mainWindow.webContents.openDevTools();
  mainWindow.loadURL(MAIN_WEBPACK_ENTRY);
}

Menu.setApplicationMenu(menu);

app.setAboutPanelOptions({
  applicationName: 'Temporal Uplift',
  applicationVersion: 'v0.0.1',
  copyright: 'SmolaGaming2021',
  // version: '0.0.1', // mac
  // credits: '', // mac/windows
  // authors: 'Chris Smola', // linux
  // website: 'https://github.com/Smolations/temporal-uplift', // linux
  iconPath: logoPath, // linux/windows; not working?
});


app.whenReady().then(() => {
  createWindow();
});


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});


app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
})
