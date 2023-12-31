// os merupakan salh satu standard library
// yang dimiliki NodeJS

// DOKUMENTASI OS 
// https://nodejs.org/api/os.html

import os from 'os'

console.info(os.hostname())
console.info(os.homedir())
console.info(os.type())
 
// mengembalikan waktu aktif sistem
console.info(Math.floor((os.uptime() / 60) / 60) / 24)

console.info(os.machine())
console.info(os.totalmem())
console.info(os.version())
console.info(os.arch())
console.info(os.loadavg())
console.info(os.availableParallelism())
console.info(os.EOL)

console.table(os.userInfo())
console.table(os.networkInterfaces())
console.table(os.cpus())
