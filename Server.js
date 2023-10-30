/*const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3001;  

const API_KEY = 'pat3IHkb7TfWf9dXc.b787e4a825cc2d291dd9344d4b548cc80900243dc9d688411b060a165c0e7dae';  
const AIRTABLE_API_URL = 'https://airtable.com/appDOTE8IwAPkm4x6/tbl5U8X6MIFqf7cQd/viwl9fa4RGbGvSGce?blocks=hide';

app.use(express.json());

// Configura CORS para permitir solicitudes en (http://localhost:3000)
app.use(cors());

app.post('/guardar-en-airtable', async (req, res) => {
  try {
    const { data } = req.body;  //  guardar datos en Airtable
    

  } catch (error) {
    console.error('Error al guardar datos en Airtable:', error);
    res.status(500).json({ error: 'Error al guardar datos en Airtable' });
  }
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});*/
