import dns from 'dns/promises'

const address = await dns.lookup('www.imhilman.my.id')

console.table(address)
