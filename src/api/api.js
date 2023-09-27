import axios from './axiosConfig';

// Ejemplo de uso de Axios para hacer una solicitud GET
axios.get('/endpoint')
  .then((response) => {
    console.log('Respuesta exitosa:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
