import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import {login} from '../models/LoginScreenModel';
import { CheckBox } from '@rneui/themed';
import { SaveUserInfo } from '../untils/UserInfo';


export default function LoginScreen({ navigation }) {
  const [type, setType] = useState(0);
  const [account, setAccount] = useState(''); //帳號
  const [password, setPassword] = useState(''); //密碼

  const handleLogin = () => {
    // TODO: 實現登入邏輯
    const successCallBack = (account,name,phone,type) =>{
      SaveUserInfo(account,name,phone,type).then(() => {
        if (type === 0) {

        } else {
          navigation.navigate('L_HouseManagement');
        }
      });
    }
    const failCallBack = () =>{
      Alert.alert('', '登入失敗');
    }
    login(account,password,type,successCallBack,failCallBack);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RentEase</Text>
      <Image source={require('../assets/home.png')} style={{width: 100, height: 100}} />
      <Text></Text>
      <Text></Text>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
      <View style={styles.checkBoxContainer}>
          <CheckBox
              title="我是房客"
              checked={type === 0}
              onPress={() => setType(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
          />
          <CheckBox
              title="我是房東"
              checked={type === 1}
              onPress={() => setType(1)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="帳號"
          keyboardType="default"
          autoCapitalize="none"
          value={account}
          onChangeText={(text) => setAccount(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="密碼"
          secureTextEntry={true}
          autoCapitalize="none"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>登入</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.buttonText}>註冊新帳戶</Text>
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
    padding: 8,
    marginBottom: 16,
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
    justifyContent: 'center',
    marginBottom: 16,
  },
});