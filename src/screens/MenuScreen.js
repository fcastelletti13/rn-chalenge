import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MenuList from '../components/MenuList';

const MenuScreen = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState([]);

  // Simulación de datos del menú (debes reemplazarlo con tu lógica real).
  const mockMenuData = [
    { id: 1, name: 'Plato 1', price: 10.99 },
    { id: 2, name: 'Plato 2', price: 12.99 },
    { id: 3, name: 'Plato 3', price: 8.99 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú del Hotel</Text>
      <MenuList menuItems={mockMenuData} />
      <Button
        title="Agregar a la Orden"
        onPress={() => navigation.navigate('OrderScreen', { menuItems })}
      />
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

export default MenuScreen;
