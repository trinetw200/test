import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { ListItem, Image , Skeleton } from '@rneui/themed';

const list = [
  {
    name: 'Amy Farha',
    url: 'https://source.unsplash.com/random?sig=1aaxx',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    url: 'https://source.unsplash.com/random?sig=21ssa',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    url: 'https://source.unsplash.com/random?sig=3',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    url: 'https://source.unsplash.com/random?sig=4',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    url: 'https://source.unsplash.com/random?sig=5',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    url: 'https://source.unsplash.com/random?sig=6',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Chris Jackson',
    url: 'https://source.unsplash.com/random?sig=7',
    subtitle: 'Vice Chairman'
  },
]

export default function L_HouseManagement_View({ navigation }) {
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem>
      <Image
        source={{ uri: item.url}}
        containerStyle={styles.item}
        PlaceholderContent={<View style={styles.activityIndicator}><ActivityIndicator size="large" color="#0000ff"/></View>}
      />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )

  return (
    <View>
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />
      {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('L_HouseManagement_Insert')}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    
  },
  item: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
  activityIndicator: {
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
  });
