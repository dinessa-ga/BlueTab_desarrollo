import React, { useState } from 'react';

export default function UploadCV() {
  const [selectedCV, setSelectedCV] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleCVUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedCV(file);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Subir CV</h1>
      <input
        type="file"
        accept=".pdf, .doc, .docx"
        onChange={handleCVUpload}
      />
      {selectedCV && (
        <div>
          <h2>CV Cargado:</h2>
          <p>Nombre del archivo: {selectedCV.name}</p>
          <p>Tamaño del archivo: {selectedCV.size} bytes</p>

          <h2>Formulario de Datos:</h2>
          <form>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Correo Electrónico:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Número de Teléfono:</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
