// karena NodeJS menggunakan modules, saat kita ingin menggunakannya
// maka harus memberitahu bahwa file javascript kita menggunakan
// modules dengan cara menamainnya dengan ekstensi '.mjs'

import os from "os"

console.info(os.platform())
console.table(os.cpus())

