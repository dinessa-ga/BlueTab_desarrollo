import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function DisplayData() {
  const [data, setData] = useState(null);
  const [pdfURL, setPdfURL] = useState('');

  useEffect(() => {
    const apiUrl = '/pdfs/'; 
    axios.get(apiUrl + '.pdf') 
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener datos:', error);
      });
  }, []);
  

  return (
    <div>
      {data && (
        <div>
          <h1>Información Guardada</h1>
          <p>Nombre: {data.name}</p>
          <p>Experiencia: {data.experience}</p>
          <p>País: {data.country}</p>
          <p>Referencias: {data.references}</p>
          <p>Educación: {data.education}</p>
          {pdfURL && (
            <div>
              <h2>PDF Almacenado</h2>
              <embed src={pdfURL} width="500" height="375" type="application/pdf" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
