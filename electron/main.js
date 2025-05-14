const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const pathToHtml = path.join(__dirname, '../app/index.html')
const pathToPreload = path.join(__dirname, 'preload.js');
const { saveJSON } = require('./fs/storage');


const createWindow = () => {
  const win = new BrowserWindow({
    title: 'Real Life RPG',
    width: 800,
    height: 600,
    webPreferences: {
      preload: pathToPreload,
      contextIsolation: true,
      sandbox: false
    }
  })
  win.loadFile(pathToHtml)
}

app.whenReady().then(() => {
  createWindow()  
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.handle('save-json', async (_event, __filename, data) => {
  try{
    await saveJSON(__filename, data);
    return { success:true };
  } catch (error){
    console.error('Fehler beim Speichern', error);
    return { success: false, error: error.message };
  }
});