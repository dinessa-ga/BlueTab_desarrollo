import React, { useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const FileUpload = ({ updateFormData }) => {
  const inputRef = useRef(null);
  const [pdfData, setPdfData] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const arrayBuffer = event.target.result;
        setPdfData(arrayBuffer);
        updateFormData({ name: file.name }); // Llama a updateFormData como una función

        // Luego de establecer el pdfData, puedes llamar a la función para guardar en el servidor
        saveToServer(arrayBuffer, file.name);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const saveToServer = async (data, fileName) => {
    try {
      // Crea un nuevo objeto FormData para enviar el archivo
      const formData = new FormData();
      formData.append('pdf', new Blob([data], { type: 'application/pdf' }));

      // Realiza una solicitud POST al servidor para guardar el PDF
      // ...

      // Después de guardar el PDF, puedes imprimir la URL del PDF en la consola
      console.log('Archivo subido al servidor con éxito.');
      const pdfURL = `/pdfs/${fileName}`; // Ruta correspondiente al servidor
      console.log('URL del PDF:', pdfURL);

      // Actualiza el estado de la aplicación o realiza acciones adicionales si es necesario
    } catch (error) {
      console.error('Error al guardar el PDF en el servidor:', error);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".pdf"
        ref={inputRef}
        onChange={handleFileChange}
      />
      {pdfData && (
        <div>
          <Document file={pdfData}>
            <Page pageNumber={1} />
          </Document>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
