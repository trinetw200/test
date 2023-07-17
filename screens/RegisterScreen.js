import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView  } from 'react-native';
import {writeUserData} from '../models/RegisterScreenModel';
import { CheckBox } from '@rneui/themed';

function Separator({ length }) {
  return <View style={{ borderTopWidth: 1, borderTopColor: 'gray', marginVertical: 10, width: 300 }} />;
}

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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.title}>Register</Text>
      <Image source={require('../assets/LOGO.jpg')} style={{width: 250, height: 200}} />
      <Text></Text>
      <View style={styles.form}>
        <View style={styles.checkBoxContainer}>
        <Text style={styles.checkbox_inputLabel}>身分          </Text>
          <CheckBox
              title="我是房客"
              checked={type === 0}
              onPress={() => setType(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="pink" // 變更選中狀態的顏色為綠色
              uncheckedColor="#8FAADC" // 變更未選中狀態的顏色為紅色
          />
          <CheckBox
              title="我是房東"
              checked={type === 1}
              onPress={() => setType(1)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checkedColor="pink" // 變更選中狀態的顏色為綠色
              uncheckedColor="#8FAADC" // 變更未選中狀態的顏色為紅色
          />
        </View>
        <Text style={styles.inputLabel}>姓名</Text>
        <Text></Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="  輸入姓名"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <Text style={styles.inputLabel}>帳號</Text>
        <Text></Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="  輸入帳號"
            value={account}
            onChangeText={(text) => setAccount(text)}
          />
        </View>
        <Text style={styles.inputLabel}>密碼</Text>
        <Text></Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="  輸入密碼"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        
        <View style={styles.checkBoxContainer}>
        <Text style={styles.checkbox_inputLabel}>性別                     </Text>
         <CheckBox
           title="女"
           checked={sex === 0}
           onPress={() => setSex(0)}
           checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o"
           checkedColor="pink" // 變更選中狀態的顏色為綠色
           uncheckedColor="#8FAADC" // 變更未選中狀態的顏色為紅色
         />
         <CheckBox
           title="男"
           checked={sex === 1}
           onPress={() => setSex(1)}
           checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o"
           checkedColor="pink" // 變更選中狀態的顏色為綠色
           uncheckedColor="#8FAADC" // 變更未選中狀態的顏色為紅色
         />
        </View>
        <Text style={styles.inputLabel}>電話</Text>
        <Text></Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="  輸入電話"
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
    borderRadius: 100,
    padding: 5,
    width: '80%',
    paddingHorizontal: 10,
  },
  button: {
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#8FAADC',
    borderRadius: 100,
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
    justifyContent: 'flex-start',
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
  // checkbox_inputLabel: {
  //   fontSize: 16,
  //   marginRight: 8,
  //   textAlign: 'center',
  // },
});