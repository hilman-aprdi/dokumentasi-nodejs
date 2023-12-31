import fs from 'fs';
import readline from 'readline/promises';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const nama = await rl.question('Masukan nama Anda : '),
      noHP = await rl.question('Masukan No HP Anda : ');

!fs.existsSync('./contacts.json') && fs.writeFileSync('contacts.json', '[]', 'utf-8');

const contact = {nama, noHP},
      fileBuffer = fs.readFileSync('./contacts.json', 'utf-8'),
      contacts = JSON.parse(fileBuffer);

contacts.push(contact);
fs.writeFileSync('./contacts.json', JSON.stringify(contacts))


rl.close();
