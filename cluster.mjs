import cluster from 'cluster'
import os from 'os'
import process from 'process'
import http from 'http'


if(cluster.isPrimary) {
  // menjalankan worker 
  console.info(`Primary ${process.pid}`)
  for(let i = 0; i < os.cpus().length; i++) {
    cluster.fork()
  }

  cluster.on('exit', worker => {
    console.info(`Worker-${worker.id} is exit`)
    cluster.fork()
  })
}

if(cluster.isWorker) {
  console.info(`Worker-${process.pid}`)

  const server = http.createServer((req, res) => {
    res.write(`Response from process-${process.pid}`)
    res.end()
    process.exit()
  })

  server.listen(3000)
}
