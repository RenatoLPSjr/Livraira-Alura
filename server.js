const http = require("http")
const port = 3001;

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pag de Livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Pag da editora'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})