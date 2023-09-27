import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import LoginForm from '../components/LoginForm';
import MenuList from '../components/MenuList';

const HomeScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [authToken, setAuthToken] = useState(null);

  // Esta función simula una llamada de inicio de sesión exitosa.
  const handleLogin = (token) => {
    setAuthToken(token);
    setIsLoggedIn(true);
    // Realizar una llamada a la API para obtener los platos del menú aquí.
    // Luego, establecer los datos de los platos en el estado usando setMenuItems.
  };

  useEffect(() => {
    /*if (authToken) {*/
      // Aquí puedes realizar una llamada a la API para obtener los platos del menú.
      // Simulación de datos de menú (debes reemplazarlos con tu lógica real).
      const mockMenuData = [
        { id: 1, name: 'Plato 1', price: 10.99 },
        { id: 2, name: 'Plato 2', price: 12.99 },
        { id: 3, name: 'Plato 3', price: 8.99 },
      ];
      setMenuItems(mockMenuData);
    /*}*/
  }, [authToken]);

  const handleLogout = () => {
    setAuthToken(null);
    setIsLoggedIn(false);
    setMenuItems([]);
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <>
          <Text style={styles.title}>Menú del Hotel</Text>
          <Button title="Cerrar Sesión" onPress={handleLogout} />
          <MenuList menuItems={menuItems} />
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;
