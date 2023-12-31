
const buffer = Buffer.from('Hilman Apriadi', 'utf-8')

console.info(buffer.toString('base64'))
console.info(buffer.toString('hex'))

const buffer2 = Buffer.from('SGlsbWFuIEFwcmlhZGk=', 'base64')
console.info(buffer2.toString('utf-8'))
