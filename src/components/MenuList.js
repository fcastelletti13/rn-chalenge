import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MenuItem from './MenuItem';

const MenuList = ({ menuItems, onAddToMenu, onRemoveFromMenu }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MenuItem
            item={item}
            onAddToMenu={onAddToMenu}
            onRemoveFromMenu={onRemoveFromMenu}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default MenuList;
