// path merupakan standard library yang digunakan untuk
// bekerja dengan lokasi file dan directory / folder

// DOKUMENTASI
// https://nodejs.org/api/path.html


import path from 'path'

const file = '/Users/Hilman/example.js'

console.info(path.toNamespacedPath(file))
console.info(path.dirname(file))
console.info(path.basename(file))
console.info(path.extname(file))
console.table(path.parse(file))
console.info(path.parse(file)['dir'])
console.info(path.delimiter)

