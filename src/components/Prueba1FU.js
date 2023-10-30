import React, { useState } from 'react';
import FileUpload from './FileUdload';
import base from './base';


import './Prueba1FU.css';

import KnowledgeSection from './KnowledgeSection';

const UploadCV = () => {
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
    <div id="formCv">
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
      <FileUpload updateFormData={updateFormDataFromPDF} />
      {console.log(formData)}
      <form className="container-form" id="container-form">
        <section>
          <label htmlFor="name" className="group-title">Nombre</label>
          <input
            type="text"
            className="group-large-input"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="summary" className="group-title">Resumen</label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </section>
        <section>
          <label className="group-title">Educación</label>
          <div className="main-input-group">
            <input
              type="text"
              className="group-large-input"
              placeholder="Institución Educativa"
              id="education_institution"
              name="education_institution"
              value={formData.education_institution}
              onChange={handleChange}
            />

            <input
              type="text"
              className="group-large-input"
              placeholder="Título"
              id="education_institution_title"
              name="education_institution_title"
              value={formData.education_institution_title}
              onChange={handleChange}
            />
          </div>


          <label htmlFor="education_startDate"  >Fecha de inicio</label>
          <div className="container-date">
            <input
              type="text"
              className="education-input date"
              placeholder='Mes'
              id="education_startMonth"
              name="education_startMonth"
              value={formData.education_startMonth}
              onChange={handleChange}
            />

            <input
              type="text"
              className="education-input date"
              placeholder='Año'
              id="education_startYear"
              name="education_startYear"
              value={formData.education_startYear}
              onChange={handleChange}
            />
          </div>

          <label htmlFor="education_lastMonth" >Fecha de finalización</label>
          <div className="container-date">
            <input
              type="text"
              className="date"
              placeholder='Mes'
              id="education_lastMonth"
              name="education_lastMonth"
              value={formData.education_lastMonth}
              onChange={handleChange}
            />

            <input
              type="text"
              className="date"
              placeholder='Año'
              id="education_lastYear"
              name="education_lastYear"
              value={formData.education_lastYear}
              onChange={handleChange}
            />
          </div>
        </section>

        <section>
          <p className="group-title">Certificaciones y cursos</p>
          <div className="main-input-group">
            <input
              type="text"
              className="group-large-input"
              placeholder='Empresa emisora'
              id="certification_company"
              name="certification_company"
              value={formData.certification_company}
              onChange={handleChange}
            />

            <input
              type="text"
              className="group-large-input"
              placeholder='Nombre de la certificación o curso'
              id="certification_name"
              name="certification_name"
              value={formData.certification_name}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="education_startDate">Fecha de inicio</label>
          <div className="container-date">
            <input
              type="text"
              className="date"
              placeholder='Mes'
              id="certification_startMonth"
              name="certification_startMonth"
              value={formData.certification_startMonth}
              onChange={handleChange}
            />

            <input
              type="text"
              className="date"
              placeholder='Año'
              id="certification_startYear"
              name="certificationn_startYear"
              value={formData.certification_startYear}
              onChange={handleChange}
            />
          </div>

          <label htmlFor="education_lastMonth">Fecha de finalización</label>
          <div className="container-date">
            <input
              type="text"
              className="date"
              placeholder='Mes'
              id="certification_lastMonth"
              name="certification_lastMonth"
              value={formData.certification_lastMonth}
              onChange={handleChange}
            />

            <input
              type="text"
              className="date"
              placeholder='Año'
              id="certification_lastYear"
              name="certification_lastYear"
              value={formData.certification_lastYear}
              onChange={handleChange}
            />
          </div>
        </section>

        <section>
          <p className="group-title">Experiencia laboral</p>
          <div className="main-input-group">
            <input
              type="text"
              className="group-large-input"
              placeholder='Nombre de la empresa'
              id="experience_nameCompany"
              name="experience_nameCompany"
              value={formData.experience_nameCompany}
              onChange={handleChange}
            />

            <input
              type="text"
              className="group-large-input"
              placeholder='Cargo'
              id="experience_position"
              name="experience_position"
              value={formData.experience_position}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="education_startDate">Fecha de inicio</label>
          <div className="container-date">
            <input
              type="text"
              className="date"
              placeholder='Mes'
              id="experience_startMonth"
              name="experience_startMonth"
              value={formData.experience_startMonth}
              onChange={handleChange}
            />

            <input
              type="text"
              className="date"
              placeholder='Año'
              id="experience_startYear"
              name="experience_startYear"
              value={formData.experience_startYear} experience
              onChange={handleChange}
            />
          </div>

          <label htmlFor="experience_lastMonth">Fecha de finalización</label>
          <div className="container-date">
            <input
              type="text"
              className="date"
              placeholder='Mes'
              id="experience_lastMonth"
              name="experience_lastMonth"
              value={formData.experience_lastMonth}
              onChange={handleChange}
            />

            <input
              type="text"
              className="date"
              placeholder='Año'
              id="experience_lastYear"
              name="experience_lastYear"
              value={formData.experience_lastYear} certification
              onChange={handleChange}
            />
          </div>
        </section>

        <section>
          {/* Renderiza el componente KnowledgeSection aquí y pasa los datos y la función de manejo de cambios */}
      <KnowledgeSection formData={formData} handleChange={handleChange} />
        </section>




      </form>
      <button onClick={() => saveDataToAirtable(formData)}>Guardar en Airtable</button> 

      <button className="button-save" onClick={saveDataToAPI}>Guardar</button>

    </div>
  );
}
