import http from 'http'

const server = http.createServer((request, response) => {
  console.info(request.url)
  console.info(request.method)

  if(request.method === 'POST') {
    request.on('data', data => {
      response.setHeader('Content-Type', 'application/json')
      response.write(`Response from server\n ${data}`)
      response.end()
    })
  } else {
    if(request.url == '/hilman') {
      response.write('Hello, Hilman!')
    } else {
      response.write('Hello, HTTP Server!')
    }
    response.end()
  }
})

// menjalankan server
server.listen(3000)
