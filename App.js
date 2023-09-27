import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider, useAppContext } from './src/context/AppContext.js';
import axios from './src/api/axiosConfig.js';
import LoginForm from './src/components/LoginForm';
import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import OrderScreen from './src/screens/OrderScreen';

const Stack = createStackNavigator();

const App = () => {
  const { user, setUser } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  /*useEffect(() => {
    // Verificar si hay un token de usuario almacenado en AsyncStorage u otro lugar
    // y establecer el usuario en el contexto si está autenticado.
    const checkAuthentication = async () => {
      try {
        const token = ''; // Obtén el token almacenado
        if (token) {
          // Si hay un token, realiza una solicitud para obtener información del usuario
          const response = await axios.get('/user-info', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data);
        }
      } catch (error) {
        console.error('Error al verificar la autenticación:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, [setUser]);

  if (isLoading) {
    return null; // Muestra una pantalla de carga mientras se verifica la autenticación
  }*/
  /*{!user ? (
          <Stack.Screen name="Login" component={LoginForm} options={{ headerShown: false }} />
        ) : ( )}*/
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Order" component={OrderScreen} />
          </>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}
