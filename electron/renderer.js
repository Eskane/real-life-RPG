console.log('window.versions:', window.versions);
console.log('window.fileAPI:', window.fileAPI);

const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
  const response = await versions.ping()
  console.log(response) // prints out 'pong'
}

func()

const test = async () => {
  await fileAPI.saveJSON('moods.json', {
    mood: '🤓',
    date: new Date().toISOString()
  });
};

document.getElementById('saveBtn').addEventListener('click', test);