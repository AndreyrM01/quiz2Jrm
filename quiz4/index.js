const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor HTTP usando Express!');
});

app.get('/task', (req, res) => {
  const tasks = [
    { id: 1, name: 'Tarea 1', description: 'Hacer lo de Leiva' },
    { id: 2, name: 'Tarea 2', description: 'Hacer lo de WIlly' },
  ];
  res.json(tasks);
});

app.post('/task', (req, res) => {
  const newTask = req.body;
  res.send('Nueva tarea agregada');
});

app.get('/image/:username', (req, res) => {
  const username = req.params.username;
  if (username === 'ronny') {
    res.sendFile(__dirname + '/ronny_image.jpg');
  } else {
    res.send('Usuario no válido');
  }
});

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
