// buffer adalah object yg berisi urutan byte dgn panjang tetap

const buffer = Buffer.from('Hilman Apriadi')

console.info(buffer)
console.info(buffer.toString())

buffer.reverse();
console.info(buffer.toString())
