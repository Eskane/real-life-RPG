const { contextBridge, ipcRenderer } = require('electron')
const fileAPI = require('./api/fileAPI');

contextBridge.exposeInMainWorld('api', {
  file: fileAPI(ipcRenderer),
});