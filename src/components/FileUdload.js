import React, { useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

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
        updateFormData({ name: file.name }); 

        saveToServer(arrayBuffer, file.name);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const saveToServer = async (data, fileName) => {
    try {
      const formData = new FormData();
      formData.append('pdf', new Blob([data], { type: 'application/pdf' }));

      console.log('Archivo subido al servidor con éxito.');
      const pdfURL = `/pdfs/${fileName}`; 
      console.log('URL del PDF:', pdfURL);

    } catch (error) {
      console.error('Error al guardar el PDF en el servidor:', error);
    }
  };
  function onDocumentLoadSuccess(page) {
    page.getTextContent().then(data =>{
      let text = '';
      console.log(data);
      data.items.forEach(obj => {
        text += obj.str;
      });
      console.log(text)
    });
  }

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
          <Document  file={pdfData}>
            <Page onLoadSuccess={onDocumentLoadSuccess} pageNumber={1} />
          </Document>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
