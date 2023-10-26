import React, { useState } from 'react';
import FileUpload from './FileUdload';
import base from './base';



const UploadCV = () => {
  const [formData, setFormData] = useState({
    name: '',
  });

  const updateFormDataFromPDF = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      name: data.name,
    }));
  };

  const handleChange = (e) => {
    
  };

  const saveDataToAirtable = (data) => {
   
    base('Bluetab').create([
      {
        fields: {
          name: data.name,
          
        },
      },
    ], 
    
    function (err, records) {
      if (err) {
        console.error('Error al guardar datos en Airtable:', err);
        return;
      }
      console.log('Datos guardados en Airtable con éxito:', records);
    });
  };

  return (
    <div id='formCv'>
      <h1>Subir CV</h1>
      <FileUpload updateFormData={updateFormDataFromPDF} saveDataToAirtable={saveDataToAirtable} />
      <form>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange} 
        />
      </form>
      <button onClick={() => saveDataToAirtable(formData)}>Guardar en Airtable</button> 
    </div>
  );
};

export default UploadCV;
