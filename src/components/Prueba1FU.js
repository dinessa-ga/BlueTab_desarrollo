import React, { useState, useEffect } from 'react';
import FileUpload from './FileUdload';

export default function UploadCV() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    identification: '',
    experience: '',
    technicalSkills: '',
    references: '',
    summary: '',
  });

  const [apiData, setApiData] = useState(null);

  const updateFormDataFromPDF = (data) => {
    setFormData({
      name: data.name,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveDataToAPI = async () => {
    
    try {
      console.log('Datos guardados en el servidor con éxito.');
    } catch (error) {
      console.error('Error al guardar los datos en el servidor:', error);
    }
  };

  useEffect(() => {
    if (apiData) {
    }
  }, [apiData]);

  return (
    <div id='formCv'>
      <h1>Subir CV</h1>
      <FileUpload updateFormData={updateFormDataFromPDF} />

      <form>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="address">Dirección:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <label htmlFor="identification">Identificación:</label>
        <input
          type="text"
          id="identification"
          name="identification"
          value={formData.identification}
          onChange={handleChange}
        />

        <label htmlFor="experience">Experiencia Laboral:</label>
        <textarea
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        />

        <label htmlFor="technicalSkills">Habilidades Técnicas:</label>
        <textarea
          id="technicalSkills"
          name="technicalSkills"
          value={formData.technicalSkills}
          onChange={handleChange}
        />

        <label htmlFor="references">Referencias:</label>
        <textarea
          id="references"
          name="references"
          value={formData.references}
          onChange={handleChange}
        />

        <label htmlFor="summary">Resumen:</label>
        <textarea
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
      </form>

      <button onClick={saveDataToAPI}>Guardar en el servidor</button>
    </div>
  );
}
