const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('¡Bienvenido al servidor HTTP!\n');
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Esta es la página de acerca de nosotros.\n');
  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Ponte en contacto con nosotros en contact@example.com\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página no encontrada\n');
  }
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});