import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
//import {writeUserData} from '../models/RegisterScreenModel';
import { CheckBox } from '@rneui/themed';

export default function L_HouseManagement({ navigation }) {

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
    fridge: false,
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
    writeUserData(type,username,account,password,sex,phone);
    Alert.alert('', '註冊成功', [
      {text: '完成', onPress: () => navigation.navigate('LoginScreen')},
    ]);
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/edit.png')} style={{width: 100, height: 100}} />
      <Text></Text>
      <Text></Text>
      <Text style={styles.title}>新增</Text>
      <View style={styles.form}>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>金額：</Text>
          <TextInput
            style={styles.input}
            placeholder="輸入金額"
            value={price}
            onChangeText={(text) => setPrice(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>地址：</Text>
          <TextInput
            style={styles.input}
            placeholder="輸入地址"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>坪數：</Text>
          <TextInput
            style={styles.input}
            placeholder="輸入坪數"
            value={area}
            onChangeText={(text) => setArea(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>格局：</Text>
          <TextInput
            style={styles.input}
            placeholder="X房X廳X衛"
            value={pattern}
            onChangeText={(text) => setPattern(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>樓層：</Text>
          <TextInput
            style={styles.input}
            placeholder="X樓"
            value={floor}
            onChangeText={(text) => setFloor(text)}
          />
        </View>

        <Text h2>屋況介紹</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>租期：</Text>
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
        <View style={styles.checkBoxContainer}>
          <Text h2>寵物：</Text>
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
        <View style={styles.checkBoxContainer}>
          <Text h2>開伙：</Text>
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

        <View style={styles.checkBoxContainer}>
          <CheckBox
            value={device.bed}
            onValueChange={(value) => setDevice({ ...device, bed: value })}
            text="床"
            style={{ marginRight: 8 }}
          />
          <CheckBox
            value={device.airConditioner}
            onValueChange={(value) => setDevice({ ...device, airConditioner: value })}
            text="冷氣"
            style={{ marginRight: 8 }}
          />
          <CheckBox
            value={device.Wardrobe}
            onValueChange={(value) => setDevice({ ...device, Wardrobe: value })}
            text="衣櫃"
            style={{ marginRight: 8 }}
          />
          <CheckBox
            value={device.tables_and_chairs}
            onValueChange={(value) => setDevice({ ...device, tables_and_chairs: value })}
            text="桌椅"
            style={{ marginRight: 8 }}
          />
          <CheckBox
            value={device.TV}
            onValueChange={(value) => setDevice({ ...device, TV: value })}
            text="電視"
            style={{ marginRight: 8 }}
          />
          <CheckBox
            value={device.WIFI}
            onValueChange={(value) => setDevice({ ...device, WIFI: value })}
            text="網路"
            style={{ marginRight: 8 }}
          />
          <CheckBox
            value={device.washing_machine}
            onValueChange={(value) => setDevice({ ...device, washing_machine: value })}
            text="洗衣機"
            style={{ marginRight: 8 }}
          />
          <CheckBox
            value={device.fridge}
            onValueChange={(value) => setDevice({ ...device, fridge: value })}
            text="冰箱"
            style={{ marginRight: 8 }}
          />
        </View>


        <Text >房東聯絡</Text> //資料庫帶入
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>姓名：</Text>
          {/* <TextInput
            style={styles.input}
            placeholder="請輸入租期"
            value={lease_term}
            onChangeText={(text) => setLease_term(text)}
          /> */}
          <Text style={styles.inputLabel}>電話：</Text>
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
          <Text style={styles.buttonText}>返回登入</Text>
        </TouchableOpacity>
      </View>
      </View>
        
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
    alignItems: 'center',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    marginRight: 8,
  },
});