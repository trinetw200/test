import React from 'react';
import { StyleSheet, Text, View, ScrollView,Button,Alert } from 'react-native';
import L_HouseManagement_Form from './L_HouseManagement_Form';
import { L_HouseManagementFormModel } from '../../../models/L_HouseManagementFormModel';

const Separator = () => {
  return <View style={styles.separator} />;
};

export default function L_HouseManagement_Update({ route, navigation }) {
  const { houseId,account } = route.params;
  const back = () => {
    navigation.goBack();
  }

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => {
          const successCallBack = () => {
            Alert.alert('', '刪除成功');
            back();
          }
          const failCallBack = () => {
            Alert.alert('', '刪除失敗');
          }

          L_HouseManagementFormModel.deleteHouseData(account,houseId, successCallBack, failCallBack);
        }} title="刪除" />
      ),
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text></Text>
        <Text></Text>
        <Text style={styles.title}>更新</Text>
        <L_HouseManagement_Form houseId={houseId} back={back}></L_HouseManagement_Form>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  separator: {
    height: 2,
    backgroundColor: '#CED0CE',
    marginVertical: 20,
  }
});