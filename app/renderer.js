//TODO: temporär zum Testen, sobald modul fertig herausnehmen!
const test = async () => {
  await fileAPI.saveJSON('moods.json', {
    mood: 'happy',
    date: new Date().toISOString()
  });
};

document.getElementById('saveBtn').addEventListener('click', test);