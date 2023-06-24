import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import {WriteHouseData} from '../../models/L_HouseManagementModel';
import { CheckBox } from '@rneui/themed';


const Separator = () => {
  return <View style={styles.separator} />;
};

export default function L_HouseManagement({ navigation }) {
  const [roomname, setRoomname] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('');
  const [pattern, setPattern] = useState('');
  const [floor, setFloor] = useState('');
  const [lease_term, setLease_term] = useState('');
  const [management_fee, setManagement_fee] = useState('');
  const [pet, setPet] = useState(0);
  const [cook, setCook] = useState(0);
  const [landlord_name, setLandlord_name] = useState(''); //房東聯絡
  const [landlord_phone, setLandlord_phone] = useState(''); //房東聯絡
  const [device, setDevice] = useState({
    fridge: true,
    airConditioner: false,
    Wardrobe: false,
    tables_and_chairs: false,
    TV: false,
    WIFI: false,
    washing_machine: false,
    fridge: false,
  });

  function handleRegister() {
    // 處理註冊邏輯
    WriteHouseData(roomname,price,address,area,pattern,floor,lease_term,management_fee,pet,cook,device);
    Alert.alert('', '新增成功', [
      {text: '完成', onPress: () => navigation.navigate('LoginScreen')},
    ]);
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text></Text>
        <Text></Text>
        <Text style={styles.title}>新增</Text>
        <View style={styles.form}>
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>房間名稱：　</Text>
            <TextInput
              style={styles.input}
              placeholder="輸入房間名稱"
              value={roomname}
              onChangeText={(text) => setRoomname(text)}
            />
            </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>金額：　</Text>
            <TextInput
              style={styles.input}
              placeholder="輸入金額"
              value={price}
              onChangeText={(text) => setPrice(text)}
            />
          </View>
        
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>地址：　</Text>
            <TextInput
              style={styles.input}
              placeholder="輸入地址"
              value={address}
              onChangeText={(text) => setAddress(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>坪數：　</Text>
            <TextInput
              style={styles.input}
              placeholder="輸入坪數"
              value={area}
              onChangeText={(text) => setArea(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>格局：　</Text>
            <TextInput
              style={styles.input}
              placeholder="X房X廳X衛"
              value={pattern}
              onChangeText={(text) => setPattern(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>樓層：　</Text>
            <TextInput
              style={styles.input}
              placeholder="X樓"
              value={floor}
              onChangeText={(text) => setFloor(text)}
            />
          </View>

          <Separator />

          <Text style={styles.inputLabel}>屋況介紹</Text>
          <Text></Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>租期：　</Text>
            <TextInput
              style={styles.input}
              placeholder="請輸入租期"
              value={lease_term}
              onChangeText={(text) => setLease_term(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>管理費：</Text>
            <TextInput
              style={styles.input}
              placeholder="請輸入管理費"
              value={management_fee}
              onChangeText={(text) => setManagement_fee(text)}
            />
          </View>

          <View style={styles.radioContainer}>
          <Text>寵物：</Text>
          <CheckBox
              title="可養"
              checked={pet === 0}
              onPress={() => setPet(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
          />
          <CheckBox
              title="不可養"
              checked={pet === 1}
              onPress={() => setPet(1)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
          />
        </View>

        <View style={styles.radioContainer}>
          <Text>開伙：</Text>
          <CheckBox
              title="可開"
              checked={cook === 0}
              onPress={() => setCook(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
          />
          <CheckBox
              title="不可開"
              checked={cook === 1}
              onPress={() => setCook(1)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
          />
        </View>

        <Separator />

        <Text style={styles.inputLabel}>提供設備</Text>
        <Text></Text>
        <View style={styles.checkBoxContainer}>
          <View style={styles.checkBoxItem}>
          <Image source={require('../../assets/edit.png')} style={styles.icon} />
            <CheckBox
              checked={device.bed}
              onPress={(value) => setDevice({ ...device, bed: !device.bed })}
            />
          </View>
          <View style={styles.checkBoxItem}>
          <Image source={require('../../assets/edit.png')} style={styles.icon} />
            <CheckBox
              checked={device.airConditioner}
              onPress={(value) => setDevice({ ...device, airConditioner: !device.airConditioner })}
            />
          </View>
          <View style={styles.checkBoxItem}>
          <Image source={require('../../assets/edit.png')} style={styles.icon} />
            <CheckBox
              checked={device.Wardrobe}
              onPress={(value) => setDevice({ ...device, Wardrobe: !device.Wardrobe })}
            />
          </View>
          <View style={styles.checkBoxItem}>
          <Image source={require('../../assets/edit.png')} style={styles.icon} />
            <CheckBox
              checked={device.tables_and_chairs}
              onPress={(value) => setDevice({ ...device, tables_and_chairs: !device.tables_and_chairs })}
            />
          </View>
          <View style={styles.checkBoxItem}>
          <Image source={require('../../assets/edit.png')} style={styles.icon} />
            <CheckBox
              checked={device.TV}
              onPress={(value) => setDevice({ ...device, TV: !device.TV })}
            />
          </View>
          <View style={styles.checkBoxItem}>
          <Image source={require('../../assets/edit.png')} style={styles.icon} />
            <CheckBox
              checked={device.WIFI}
              onPress={(value) => setDevice({ ...device, WIFI: !device.WIFI })}
            />
          </View>
          <View style={styles.checkBoxItem}>
          <Image source={require('../../assets/edit.png')} style={styles.icon} />
            <CheckBox
              checked={device.washing_machine}
              onPress={(value) => setDevice({ ...device, washing_machine: !device.washing_machine })}
            />
          </View>
          <View style={styles.checkBoxItem}>
          <Image source={require('../../assets/edit.png')} style={styles.icon} />
            <CheckBox
              checked={device.fridge}
              onPress={(value) => setDevice({ ...device, fridge: !device.fridge })}
            />
          </View>
        </View>

        <Separator />

        <Text style={styles.inputLabel}>房東聯絡資訊</Text>
        <Text></Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>姓名：　</Text>
            {/* <TextInput
              style={styles.input}
              placeholder="請輸入租期"
              value={lease_term}
              onChangeText={(text) => setLease_term(text)}
            /> */}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>電話：　</Text>
            {/* <TextInput
              style={styles.input}
              placeholder="請輸入租期"
              value={lease_term}
              onChangeText={(text) => setLease_term(text)}
            /> */}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>新增</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>返回</Text>
        </TouchableOpacity>
      </View>
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
  form: {
    width: '60%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 5,
    flex: 1,
    width: 'auto',
  },
  button: {
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#406E9F',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 14,
    marginRight: 3,
    textAlign: 'center'
  },
  checkBoxItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 20,
  },
  icon: {
    width: 32,
    height: 32,
    marginBottom: 5,
  },
  separator: {
    height: 2,
    backgroundColor: '#CED0CE',
    marginVertical: 20,
  },
});