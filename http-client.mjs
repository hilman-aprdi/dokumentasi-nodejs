import https from 'https'

const endpoint = 'https://eo7dg2ftiyxgepq.m.pipedream.net'
const request = https.request(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}, response => {
    response.on('data', data => {
      console.info(`Receive data ${data.toString()}`)
    })
})

const body = {
  firstName: 'Hilman',
  lastName: 'Apriadi'
}

request.write(JSON.stringify(body))
request.end()
