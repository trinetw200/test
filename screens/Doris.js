import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

const ImageList = () => {
  const imageList = [
    { id: 1, source: require('../assets/bed.png'), text: 'Image 1' },
    { id: 2, source: require('../assets/bed.png'), text: 'Image 2' },
    { id: 3, source: require('../assets/bed.png'), text: 'Image 3' },
    // Add more images as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.source} style={styles.image} resizeMode="cover" />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={imageList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ImageList;
