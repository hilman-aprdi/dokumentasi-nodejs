import {threadId, parentPort} from 'worker_threads'

parentPort.on('message', msg => {
  for(let i = 0; i < msg; i++) {
    console.info(`Thread-${threadId} send message ${i}`)
  }
  parentPort.close()
})

