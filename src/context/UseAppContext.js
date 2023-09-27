import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAppContext } from './AppContext';

const UserProfile = () => {
  const { user, setUser } = useAppContext();

  const handleLogout = () => {
    // Realiza las acciones de cierre de sesión aquí
    setUser(null);
  };

  return (
    <View>
      <Text>Usuario: {user ? user.name : 'No hay usuario'}</Text>
      {user && <Button title="Cerrar Sesión" onPress={handleLogout} />}
    </View>
  );
};

export default UserProfile;
