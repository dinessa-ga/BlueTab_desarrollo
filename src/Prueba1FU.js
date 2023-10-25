import React, { useState } from 'react';

export default function UploadCV() {
  const [selectedCV, setSelectedCV] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    abstract: '',
    education_institution: '',
    education_institution_title:'',
    education_startMonth:'',
    education_startYear:'',
    education_lastMonth_:'',
    education_lastYear:'',
    certification_company:'',
    certification_name:'',
    certification_startMonth:'',
    certification_startYear:'',
    certification_lastMonth_:'',
    certification_lastYear:'',
    experience_nameCompany:'',
    experience_position:'',
    experience_startMonth:'',
    experience_startYear:'',
    experience_lastMonth_:'',
    experience_lastYear:'',
    knowledge:'',




    
    
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
              <label>Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Resumen</label>
              <input
                type="text"
                name="abstract"
                value={formData.abstract}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Institución de Educación</label>
              <input
                type="text"
                name="education_institution"
                value={formData.education_institution}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Título de Educación</label>
              <input
                type="text"
                name="education_institution_title"
                value={formData.education_institution_title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Mes de Inicio de Educación</label>
              <input
                type="text"
                name="education_startMonth"
                value={formData.education_startMonth}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Año de Inicio de Educación</label>
              <input
                type="text"
                name="education_startYear"
                value={formData.education_startYear}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Mes de Finalización de Educación</label>
              <input
                type="text"
                name="education_lastMonth"
                value={formData.education_lastMonth}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Año de Finalización de Educación</label>
              <input
                type="text"
                name="education_lastYear"
                value={formData.education_lastYear}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Empresa de Certificación</label>
              <input
                type="text"
                name="certification_company"
                value={formData.certification_company}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Nombre de Certificación</label>
              <input
                type="text"
                name="certification_name"
                value={formData.certification_name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Mes de Inicio de Certificación</label>
              <input
                type="text"
                name="certification_startMonth"
                value={formData.certification_startMonth}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Año de Inicio de Certificación</label>
              <input
                type="text"
                name="certification_startYear"
                value={formData.certification_startYear}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Mes de Finalización de Certificación</label>
              <input
                type="text"
                name="certification_lastMonth"
                value={formData.certification_lastMonth}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Año de Finalización de Certificación</label>
              <input
                type="text"
                name="certification_lastYear"
                value={formData.certification_lastYear}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Nombre de la Empresa/Experiencia</label>
              <input
                type="text"
                name="experience_nameCompany"
                value={formData.experience_nameCompany}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Puesto de Experiencia</label>
              <input
                type="text"
                name="experience_position"
                value={formData.experience_position}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Mes de Inicio de Experiencia</label>
              <input
                type="text"
                name="experience_startMonth"
                value={formData.experience_startMonth}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Año de Inicio de Experiencia</label>
              <input
                type="text"
                name="experience_startYear"
                value={formData.experience_startYear}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Mes de Finalización de Experiencia</label>
              <input
                type="text"
                name="experience_lastMonth"
                value={formData.experience_lastMonth}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Año de Finalización de Experiencia</label>
              <input
                type="text"
                name="experience_lastYear"
                value={formData.experience_lastYear}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Conocimiento</label>
              <input
                type="text"
                name="knowledge"
                value={formData.knowledge}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}