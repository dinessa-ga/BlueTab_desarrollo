const express = require('express');
const app = express();
const port = 3000; // El puerto en el que está funcionando tu servidor
const path = require('path'); // Módulo para manejar rutas de archivos

// ...

// Ruta para servir archivos PDF almacenados
app.get('/pdfs/:pdfName', (req, res) => {
  const pdfName = req.params.pdfName;
  const pdfPath = path.join(__dirname, 'public', 'uploads', pdfName); // Ajusta la ruta según tu estructura de carpetas

  res.sendFile(pdfPath);
});

// ...

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
