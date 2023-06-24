import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import {writeUserData} from '../models/RegisterScreenModel';
import { CheckBox } from '@rneui/themed';

export default function RegisterScreen({ navigation }) {
  const [type, setType] = useState(0);
  const [username, setUsername] = useState('');
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [sex, setSex] = useState(0);

  function  handleRegister() {
    // 處理註冊邏輯
    const successCallBack = () =>{
      Alert.alert('', '註冊成功', [
        {text: '完成', onPress: () => navigation.navigate('LoginScreen')},
      ]);
    }
    const failCallBack = () =>{
      Alert.alert('', '註冊失敗');
    }
    writeUserData(type,username,account,password,sex,phone,successCallBack,failCallBack);
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/edit.png')} style={{width: 100, height: 100}} />
      <Text></Text>
      <Text></Text>
      <Text style={styles.title}>Register</Text>
      <View style={styles.form}>
        <View style={styles.checkBoxContainer}>
          <Text h2>身分：</Text>
          <CheckBox
              title="房客"
              checked={type === 0}
              onPress={() => setType(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
          />
          <CheckBox
              title="房東"
              checked={type === 1}
              onPress={() => setType(1)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>姓名：</Text>
          <TextInput
            style={styles.input}
            placeholder="輸入姓名"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>帳號：</Text>
          <TextInput
            style={styles.input}
            placeholder="輸入帳號"
            value={account}
            onChangeText={(text) => setAccount(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>密碼：</Text>
          <TextInput
            style={styles.input}
            placeholder="輸入密碼"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.checkBoxContainer}>
        <Text h2>性別：</Text>
         <CheckBox
           title="女"
           checked={sex === 0}
           onPress={() => setSex(0)}
           checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o"
         />
         <CheckBox
           title="男"
           checked={sex === 1}
           onPress={() => setSex(1)}
           checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o"
         />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>電話：</Text>
          <TextInput
            style={styles.input}
            placeholder="輸入電話"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>註冊</Text>
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