import React, {useState} from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { ListItem, Image } from '@rneui/themed';
import { L_HouseManagementListModel } from '../../../models/L_HouseManagementListModel';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

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

export default function L_HouseManagement_List({ navigation }) {

  const userInfoData = useSelector((state) => state.userInfoData);
  const [itemList, setItemList] = useState([]);
  
  useFocusEffect(
    React.useCallback(() => {
      const model = new L_HouseManagementListModel();
      const account = userInfoData.account;
      
      if (account != '') {
        const successCallBack = (itemList) => {
          console.log(itemList);
          setItemList(itemList);
        }
        model.getHouseDataList(userInfoData.account,successCallBack);
      }
    }, [])
  );

  keyExtractor = (item) => item.houseId;

  renderItem = ({ item }) => (
    <ListItem>
      <Image
        source={{ uri: item.image }}
        containerStyle={styles.item}
        PlaceholderContent={<View style={styles.activityIndicator}><ActivityIndicator size="large" color="#0000ff" /></View>}
      />
      <ListItem.Content>
        <ListItem.Title>{item.title}</ListItem.Title>
        <ListItem.Subtitle>{item.price}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )

  return (
    <View>
      <FlatList
        keyExtractor={keyExtractor}
        data={itemList}
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
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
