import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {login} from '../models/LoginScreenModel';

export default function APP({ navigation }) {
  const [account, setAccount] = useState(''); //帳號
  const [password, setPassword] = useState(''); //密碼

  const handleLogin = () => {
    // TODO: 實現登入邏輯
    login(account,password);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/home.png')} style={{width: 100, height: 100}} />
      <Text></Text>
      <Text></Text>
      <Text style={styles.title}>Login</Text>
      <View style={styles.form}>
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
});