import React, { useRef, useState } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js`;

const FileUpload = () => {
  const inputRef = useRef(null);
  const [pdfData, setPdfData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    experience: '',
    // Agrega más campos según tus necesidades
  });

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const arrayBuffer = event.target.result;

        try {
          const pdfDocument = await getDocument({ data: arrayBuffer }).promise;

          let text = '';
          for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
            const page = await pdfDocument.getPage(pageNum);
            const pageText = await page.getTextContent();
            text += pageText.items.map((item) => item.str).join(' ') + '\n';
          }

          setPdfData(text);

          // Aquí puedes realizar el análisis del texto para extraer la información específica
          // Por ejemplo, puedes buscar patrones en el texto para encontrar el nombre, dirección, experiencia, etc.
          // Luego, actualiza el estado formData con la información extraída.
          const extractedData = extractDataFromText(text);
          setFormData(extractedData);
        } catch (error) {
          console.error('Error al cargar el PDF:', error);
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const extractDataFromText = (text) => {
    const name = extractName(text);
    const address = extractAddress(text);
    const experience = extractExperience(text);
  
    return {
      name,
      address,
      experience,
      // Completa con más campos
    };
  };
  
  const extractName = (text) => {
    // Implementa la lógica para extraer el nombre del CV desde el texto del PDF
    // Por ejemplo, puedes buscar patrones como "Nombre: Nombre Apellido" o "Nombre completo: Nombre Apellido"
    // y extraer el nombre.
  
    // Ejemplo de implementación:
    const namePattern = /Nombre:\s+(.+)/i;
    const match = text.match(namePattern);
    if (match) {
      return match[1];
    }
    return '';
  };
  
  const extractAddress = (text) => {
    // Implementa la lógica para extraer la dirección desde el texto del PDF
    // Similar a extractName, busca patrones que coincidan con la dirección.
  
    return ''; // Devuelve la dirección extraída o una cadena vacía si no se encuentra.
  };
  
  const extractExperience = (text) => {
    // Implementa la lógica para extraer la experiencia laboral desde el texto del PDF
    // Busca patrones que coincidan con la experiencia laboral, como nombres de empresas y fechas.
  
    return ''; // Devuelve la experiencia extraída o una cadena vacía si no se encuentra.
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
          <form>
            <label>
              Nombre:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </label>
            <label>
              Dirección:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </label>
            <label>
              Experiencia:
              <textarea
                name="experience"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              />
            </label>
            {/* Agrega más campos aquí */}
          </form>
        </div>
      )}
    </div>
  );
};

export default FileUpload;