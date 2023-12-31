import fs from 'fs'

const writter = fs.createWriteStream('stream.log')
writter.write('Hilman\n')
writter.write('Apriadi\n')
writter.end()

const reader = fs.createReadStream('stream.log')
reader.addListener('data', data => {
  console.info(data.toString())
})
