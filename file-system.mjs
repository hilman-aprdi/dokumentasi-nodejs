// standard library yang digunakan untuk manipulasi File System 
// terdapat 3 jenis library dalam File System 
//    • sync 
//    • async dengan callback
//    • async dengan promise 


// DOKUMENTASI
// https://nodejs.org/api/fs.html#fsmkdirpath-options-callback


// contoh penggunaan async dengan promise 
import fs from 'fs/promises'

const buffer = await fs.readFile('./file-system.mjs')
console.info(buffer.toString())

await fs.writeFile('./tmp.txt', 'Hello NodeJS')
