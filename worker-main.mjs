import {threadId, Worker} from 'worker_threads'

const worker1 = new Worker('./worker.mjs')
const worker2 = new Worker('./worker.mjs')

worker1.on('message', msg => {
  console.info(`Thread-${threadId} receive from worker 1 : ${msg}`)
})

worker2.on('message', msg => {
  console.info(`Thread-${threadId} receive from worker 2 : ${msg}`)
})

worker1.postMessage(10)
worker2.postMessage(10)
