import {URL} from 'url' 

const myWeb = new URL('https://imhilman.my.id')

console.info(myWeb)
myWeb.host = 'apriadi'
console.info(myWeb)
