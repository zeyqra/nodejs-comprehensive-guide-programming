request.method
request.url
request.header
request.trailers
request.httpVersion
request.connection

http.STATUS_CODES

res.statusCode
res.setHeader()
res.getHeader()
res.removeHeader()
res.writeHead(302, { location: '/', {'content-type': 'text/plain' }})
res.write()

let body = ''
req.on('readable', () => {
const data = req.read()
body += data
})
req.on('end', () => {
const result = parse(body)
})
