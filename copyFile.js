const fs = require('fs');

function copyFile(sourceFile, destinationFile) {
  fs.readFile(sourceFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo de origen:', err);
      return;
    }

    fs.writeFile(destinationFile, data, 'utf8', (err) => {
      if (err) {
        console.error('Error al escribir en el archivo de destino:', err);
        return;
      }

      console.log('Archivo copiado exitosamente.');
    });
  });
}

module.exports = copyFile;
