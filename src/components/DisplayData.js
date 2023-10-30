import React, { useState, useEffect } from 'react';


const DisplayData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
  }, []);

  return (
    <div>
      {data && (
        <div>
          <h1>Información Guardada</h1>
          <p>Nombre: {data.name}</p>
          
        </div>
      )}
    </div>
  );
};

export default DisplayData;
