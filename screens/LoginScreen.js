import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { login } from '../models/LoginScreenModel';
import { CheckBox } from '@rneui/themed';
import { useDispatch } from 'react-redux';
import { userLogin } from '../src/redux/reducers/userInfoSlice';

export default function LoginScreen({ navigation }) {
  const [type, setType] = useState(0);
  const [account, setAccount] = useState(''); //帳號
  const [password, setPassword] = useState(''); //密碼
  const dispatch = useDispatch();
  const handleLogin = () => {
    // TODO: 實現登入邏輯
    const successCallBack = (account, name, phone, type) => {
      dispatch(userLogin({ account, name, phone, type }));
    }
    const failCallBack = () => {
      Alert.alert('', '登入失敗');
    }
    login(account, password, type, successCallBack, failCallBack);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      <Text style={styles.title}>Log in on RentEase : )</Text>
        <Image
          source={require('../assets/LOGO.jpg')}
          style={{ width: 250, height: 200, marginBottom: 24 }}
        />
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
              placeholder="  帳號"
              keyboardType="default"
              autoCapitalize="none"
              value={account}
              onChangeText={(text) => setAccount(text)}
          />
          <TextInput
              style={styles.input}
              placeholder="  密碼"
              secureTextEntry={true}
              autoCapitalize="none"
              value={password}
              onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>登入</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('RegisterScreen')}
          >
            <Text style={styles.buttonText}>註冊新帳戶</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  form: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: 350,
    height: 40,
    borderWidth: 0,
    borderColor: '#ccc',
    backgroundColor: '#E2E2E2',
    borderRadius: 100,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    width: 350,
    height: 40,
    paddingHorizontal: 20,
    backgroundColor: '#8FAADC',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 16,
    width: 350,
  },
});
