const express = require('express');
const app = express();
const port = 3000; 
const path = require('path'); 


app.get('/pdfs/:pdfName', (req, res) => {
  const pdfName = req.params.pdfName;
  const pdfPath = path.join(__dirname, 'public', 'uploads', pdfName); 
  res.sendFile(pdfPath);
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
