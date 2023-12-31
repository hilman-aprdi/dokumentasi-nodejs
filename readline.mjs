import {stdout, stdin} from 'process'
import readline from 'readline/promises'

const input = readline.createInterface({
  input: stdin,
  output: stdout
})

const name = await input.question('What is your name? ')
console.info(`Hello, ${name}`)
const color = await input.question('What is your fav color? ')
console.info(`Your fav color is, ${color}`)
input.close()
