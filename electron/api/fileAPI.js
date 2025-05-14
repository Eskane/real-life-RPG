module.exports = (ipc) => ({
    saveJSON: (filename, data) => ipc.invoke('save-json', filename, data)
})