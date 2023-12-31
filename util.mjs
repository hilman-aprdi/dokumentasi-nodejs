import util from 'util'

const fisrtName = 'Hilman',
      lastName = 'Apriadi'

console.info(util.format('Hello %s %s', fisrtName, lastName))

const person = {
  fisrtName: 'Hilman',
  lastName: 'Apriadi'
}

console.info(util.format('Hello %j', person))
