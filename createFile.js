const fs = require('fs');
const file = fs.createWriteStream('./bigData.json');

file.write('[\n')
for (let i = 0; i <= 1e5; i++) {
  let airport = ''
  for (let index = 0; index < 3; index++) {
    airport += String.fromCharCode(Math.floor((Math.random() * 25) + 97))
  }
  airport = airport.toUpperCase()
  const date = new Date().getDate().toString().padStart(2, '0')
  const hour = new Date().getHours().toString().padStart(2, '0')
  const minutes = new Date().getMinutes().toString().padStart(2, '0')
  const direction = Math.floor((Math.random() * 360)).toString().padStart(3, '0')
  const windSpeed = Math.floor(Math.random() * 150)
  const gusts = Date.now() % 2 ? `G${Math.floor(Math.random() * 89) + 10}` : ''
  const units = Date.now() % 2 ? 'MPS' : 'KT'
    
  file.write(`"${airport} ${date}${hour}${minutes}Z ${direction}${windSpeed}${gusts}${units}",\n`);
}
file.write('\n]')

file.end();
