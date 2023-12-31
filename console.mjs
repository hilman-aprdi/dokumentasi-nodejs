import {Console} from 'console'
import fs from 'fs'

const file = fs.createWriteStream('application.log')

const log = new Console({
  stdout: file,
  stderr: file
})

log.info('Hellow World')
log.error('Hello NodeJS')

const person = {
  fisrtName: 'Hilman',
  lastName: 'Apriadi'
}

log.table(person)
