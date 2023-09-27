import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const OrderScreen = ({ route, navigation }) => {
  const [orderItems, setOrderItems] = useState([]);
  const { menuItems } = route.params;

  const handleAddToOrder = (menuItem) => {
    // Agregar el plato seleccionado a la orden.
    setOrderItems([...orderItems, menuItem]);
  };

  const handleRemoveFromOrder = (menuItem) => {
    // Eliminar el plato seleccionado de la orden.
    const updatedOrder = orderItems.filter((item) => item.id !== menuItem.id);
    setOrderItems(updatedOrder);
  };

  const calculateTotalPrice = () => {
    // Calcular el precio total de la orden sumando los precios de los platos.
    return orderItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu Orden</Text>
      {orderItems.map((menuItem) => (
        <View key={menuItem.id} style={styles.orderItem}>
          <Text>{menuItem.name}</Text>
          <Text>Precio: ${menuItem.price.toFixed(2)}</Text>
          <Button
            title="Eliminar"
            onPress={() => handleRemoveFromOrder(menuItem)}
          />
        </View>
      ))}
      <Text style={styles.total}>Total: ${calculateTotalPrice().toFixed(2)}</Text>
      <Button title="Finalizar Orden" onPress={() => navigation.navigate('Home')} />
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
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default OrderScreen;
