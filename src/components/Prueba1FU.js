import React, { useState, useEffect } from 'react';
import FileUpload from './FileUdload';
import './Prueba1FU.css';

export default function UploadCV() {
  const [formData, setFormData] = useState({
    name: '',
    summary: '',
    education_institution: '',
    education_institution_title: '',
    education_startMonth: '',
    education_startYear: '',
    education_lastMonth: '',
    education_lastYear: '',
    certification_company: '',
    certification_name: '',
    certification_startMonth: '',
    certification_startYear: '',
    certification_lastMonth: '',
    certification_lastYear: '',
    experience_nameCompany: '',
    experience_position: '',
    experience_startMonth: '',
    experience_startYear: '',
    experience_lastMonth: '',
    experience_lastYear: '',
    knowledge: '',
  });

  const [apiData, setApiData] = useState(null);

  const updateFormDataFromPDF = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      name: data.name,
      summary: data.summary,
      education_institution: data.education_institution,
      education_institution_title: data.education_institution_title,
      education_startMonth: data.education_startMonth,
      education_startYear: data.education_startYear,
      education_lastMonth: data.education_lastMonth,
      education_lastYear: data.education_lastYear,
      certification_company: data.certification_company,
      certification_name: data.certification_name,
      certification_startMonth: data.certification_startMonth,
      certification_startYear: data.certification_startYear,
      certification_lastMonth: data.certification_lastMonth,
      certification_lastYear: data.certification_lastYear,
      experience_nameCompany: data.experience_nameCompany,
      experience_position: data.experience_position,
      experience_startMonth: data.experience_startMonth,
      experience_startYear: data.experience_startYear,
      experience_lastMonth: data.experience_lastMonth,
      experience_lastYear: data.experience_lastYear,
      knowledge: data.knowledge,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveDataToAPI = async () => {
    try {
      console.log('Datos guardados en el servidor con éxito.');
      // Aquí puedes enviar formData al servidor, si es necesario
      // Aquí puedes enviar 'formData' al servidor con Axios u otra librería.
    } catch (error) {
      console.error('Error al guardar los datos en el servidor:', error);
    }
  };

  useEffect(() => {
    if (apiData) {
      // Realiza alguna acción cuando apiData cambie, si es necesario
      // Realizar acciones adicionales si es necesario.
    }
  }, [apiData]);

  return (
    <div id="formCv">
      <h1>Subir CV</h1>
      <FileUpload updateFormData={updateFormDataFromPDF} />
        {console.log(formData)}
      <form>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
  
        <label htmlFor="summary">Resumen</label>
        <textarea
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
  
        <label htmlFor="education_institution">Institución Educativa</label>
        <input
          type="text"
          id="education_institution"
          name="education_institution"
          value={formData.education_institution}
          onChange={handleChange}
        />
  
        <label htmlFor="education_institution_title">Título de Educación</label>
        <input
          type="text"
          id="education_institution_title"
          name="education_institution_title"
          value={formData.education_institution_title}
          onChange={handleChange}
        />
  
        <label htmlFor="education_startMonth">Mes de Inicio de Educación</label>
        <input
          type="text"
          id="education_startMonth"
          name="education_startMonth"
          value={formData.education_startMonth}
          onChange={handleChange}
        />
  
        <label htmlFor="education_startYear">Año de Inicio de Educación</label>
        <input
          type="text"
          id="education_startYear"
          name="education_startYear"
          value={formData.education_startYear}
          onChange={handleChange}
        />
  
        <label htmlFor="education_lastMonth">Mes de Finalización de Educación</label>
        <input
          type="text"
          id="education_lastMonth"
          name="education_lastMonth"
          value={formData.education_lastMonth}
          onChange={handleChange}
        />
  
        <label htmlFor="education_lastYear">Año de Finalización de Educación</label>
        <input
          type="text"
          id="education_lastYear"
          name="education_lastYear"
          value={formData.education_lastYear}
          onChange={handleChange}
        />
  
        <label htmlFor="certification_company">Empresa de Certificación</label>
        <input
          type="text"
          id="certification_company"
          name="certification_company"
          value={formData.certification_company}
          onChange={handleChange}
        />
  
        <label htmlFor="certification_name">Nombre de Certificación</label>
        <input
          type="text"
          id="certification_name"
          name="certification_name"
          value={formData.certification_name}
          onChange={handleChange}
        />
  
        <label htmlFor="certification_startMonth">Mes de Inicio de Certificación</label>
        <input
          type="text"
          id="certification_startMonth"
          name="certification_startMonth"
          value={formData.certification_startMonth}
          onChange={handleChange}
        />
  
        <label htmlFor="certification_startYear">Año de Inicio de Certificación</label>
        <input
          type="text"
          id="certification_startYear"
          name="certification_startYear"
          value={formData.certification_startYear}
          onChange={handleChange}
        />
  
        <label htmlFor="certification_lastMonth">Mes de Finalización de Certificación</label>
        <input
          type="text"
          id="certification_lastMonth"
          name="certification_lastMonth"
          value={formData.certification_lastMonth}
          onChange={handleChange}
        />
  
        <label htmlFor="certification_lastYear">Año de Finalización de Certificación</label>
        <input
          type="text"
          id="certification_lastYear"
          name="certification_lastYear"
          value={formData.certification_lastYear}
          onChange={handleChange}
        />
  
        <label htmlFor="experience_nameCompany">Empresa de Experiencia</label>
        <input
          type="text"
          id="experience_nameCompany"
          name="experience_nameCompany"
          value={formData.experience_nameCompany}
          onChange={handleChange}
        />
  
        <label htmlFor="experience_position">Cargo en Experiencia</label>
        <input
          type="text"
          id="experience_position"
          name="experience_position"
          value={formData.experience_position}
          onChange={handleChange}
        />
  
        <label htmlFor="experience_startMonth">Mes de Inicio de Experiencia</label>
        <input
          type="text"
          id="experience_startMonth"
          name="experience_startMonth"
          value={formData.experience_startMonth}
          onChange={handleChange}
        />
  <label htmlFor="experience_startYear">Año de Inicio de Experiencia</label>
      <input
        type="text"
        id="experience_startYear"
        name="experience_startYear"
        value={formData.experience_startYear}
        onChange={handleChange}
      />

      <label htmlFor="experience_lastMonth">Mes de Finalización de Experiencia</label>
      <input
        type="text"
        id="experience_lastMonth"
        name="experience_lastMonth"
        value={formData.experience_lastMonth}
        onChange={handleChange}
      />

      <label htmlFor="experience_lastYear">Año de Finalización de Experiencia</label>
      <input
        type="text"
        id="experience_lastYear"
        name="experience_lastYear"
        value={formData.experience_lastYear}
        onChange={handleChange}
      />

      <label htmlFor="knowledge">Conocimientos</label>
      <textarea
        id="knowledge"
        name="knowledge"
        value={formData.knowledge}
        onChange={handleChange}
      />
    </form>

    <button onClick={saveDataToAPI}>Guardar en el servidor</button>
  </div>
)};