import axios from 'axios';

// Crea una instancia de Axios con una configuración base
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Reemplaza con la URL de tu API
  timeout: 5000, // Tiempo de espera para las solicitudes (en milisegundos)
});

// Configura interceptores para manejar las solicitudes y respuestas
axiosInstance.interceptors.request.use(
  (config) => {
    // Puedes agregar encabezados personalizados aquí si es necesario
    // Ejemplo: config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Puedes realizar acciones comunes con la respuesta aquí
    return response;
  },
  (error) => {
    // Puedes manejar errores comunes aquí
    if (error.response) {
      // Error de respuesta del servidor (por ejemplo, código de estado 4xx o 5xx)
      console.error('Error de respuesta:', error.response.data);
    } else if (error.request) {
      // Error de solicitud (por ejemplo, no se pudo realizar la solicitud)
      console.error('Error de solicitud:', error.request);
    } else {
      // Error general
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
