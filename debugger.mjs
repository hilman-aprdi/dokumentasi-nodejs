// secara default saat menggunaian perintah 'node namaFile.js'
// NodeJS tidak akan jalan dalam mode debug 

// agar jalan dalam mode debug, harus menambahkan 'inspect'
// 'node inspect namaFile.js'

// perintah debugger
//    • cont, c -> continue execution 
//    • next, n -> step next
//    • step, s -> step in
//    • out, o -> step out
//    • pause -> pause running code

// untuk melihat isi dari sebuah variabel
// watch(namaVariabel)

// DOKUMENTASI
// https://nodejs.org/api/debugger.html#watchers

function sayHello(name) {
  debugger
  return `Hello ${name}`
}

const name = 'Hilman'
console.info(sayHello(name))
