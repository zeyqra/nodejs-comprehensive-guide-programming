import { createServer } from 'http'
const server = createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost:8080/')
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
  res.end(
    `<!DOCTYPE html> <html> <head> <meta charset="utf-8"> <title>Node.js Demo</title> </head> <body> <h1 style="color:green">Hello ${url.searchParams.get('name')}</h1> </body> </html>`
  )
})

server.listen(8080, () => {
  console.log(server.address().port)
})
