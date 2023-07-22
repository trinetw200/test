import React, {useState} from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet, FlatList } from 'react-native';
import { ListItem, Image } from '@rneui/themed';
import { L_HouseManagementListModel } from '../../../models/L_HouseManagementListModel';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';

export default function L_HouseManagement_List({ navigation }) {

  const userInfoData = useSelector((state) => state.userInfoData);
  const [itemList, setItemList] = useState([]);
  
  useFocusEffect(
    React.useCallback(() => {
      const model = new L_HouseManagementListModel();
      const account = userInfoData.account;
      
      if (account != '') {
        const successCallBack = (itemList) => {
          setItemList(itemList);
        }
        model.getHouseDataList(userInfoData.account,successCallBack);
      }
    }, [])
  );

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate('L_HouseManagement_Insert')} title="新增" />
      ),
    });
  }, [navigation]);

  keyExtractor = (item) => item.houseId;

  renderItem = ({ item }) => (
    <ListItem bottomDivider onPress={() => navigation.navigate('L_HouseManagement_Update',{houseId:item.houseId})}>
      <Image
        source={{ uri: item.image }}
        containerStyle={styles.item}
        PlaceholderContent={<View style={styles.activityIndicator}><ActivityIndicator size="large" color="#ffffff" /></View>}
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
