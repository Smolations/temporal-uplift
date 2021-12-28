const {
  app,
  BrowserWindow,
  Menu,
  MenuItem,
} = require('electron');
const path = require('path');


const isMac = process.platform === 'darwin';

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
          await shell.openExternal('https://electronjs.org');
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
    width: 1500,
    height: 1000,
    webPreferences: {
      preload: MAIN_PRELOAD_WEBPACK_ENTRY,
    }
  });

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
  iconPath: path.resolve(__dirname, 'src/logo.png'), // linux/windows; not working?
});

app.whenReady().then(() => {
  createWindow();
});
