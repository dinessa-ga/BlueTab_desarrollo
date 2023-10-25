import React, { useState, useEffect } from 'react';
import FileUpload from './FileUdload';

export default function UploadCV() {
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    country: '',
    references: '',
    education: '',
  });

  const [apiData, setApiData] = useState(null);

  const updateFormDataFromPDF = (data) => {
    setFormData({
      name: data.name,
      experience: data.experience,
      country: data.country,
      references: data.references,
      education: data.education,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveDataToAPI = async () => {
    try {
      // Realiza una solicitud POST al servidor
      // ...

      // Actualiza el estado de la aplicación o realiza acciones adicionales si es necesario
      // ...

      console.log('Datos guardados en el servidor con éxito.');
    } catch (error) {
      console.error('Error al guardar los datos en el servidor:', error);
    }
  };

  useEffect(() => {
    if (apiData) {
      // Realiza acciones adicionales si es necesario después de guardar en el servidor
    }
  }, [apiData]);

  return (
    <div>
      <h1>Subir CV</h1>
      <FileUpload updateFormData={updateFormDataFromPDF} />
      {/* Resto del formulario aquí */}
      <button onClick={saveDataToAPI}>Guardar en el servidor</button>
    </div>
  );
}
