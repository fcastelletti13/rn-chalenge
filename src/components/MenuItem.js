import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { getInfoPlate } from '../api/api';

const MenuItem = ({ item }) => {
  const [InfoItem, setInfoItem] = useState([]);

  useEffect(() => {
    const info = getInfoPlate(item.id);
    setInfoItem(info)
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>Price: ${price}</Text>
        <Text style={styles.vegan}>{isVegan ? 'Vegan' : 'Not Vegan'}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => onAddToMenu(item)}
          style={styles.addToMenuButton}
        >
          <Text style={styles.addToMenuButtonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onRemoveFromMenu(item)}
          style={styles.removeFromMenuButton}
        >
          <Text style={styles.removeFromMenuButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  vegan: {
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addToMenuButton: {
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  addToMenuButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  removeFromMenuButton: {
    backgroundColor: '#F44336',
    padding: 5,
    borderRadius: 5,
  },
  removeFromMenuButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MenuItem;
