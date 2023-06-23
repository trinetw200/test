import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { firebaseConfig } from '../untils/FirebaseConfig';

export function  writeUserData(name, account, password, sex, phone) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  set(ref(db, 'users/' + account), {
    "name": name,
    "password": password,
    "sex" : sex,
    "phone" : phone
  }).then(() => {
    // Data saved successfully!
  }).catch((error) => {
    // The write failed...
    Alert.alert('', '註冊失敗', [
      {text: '關閉'},
    ]);
  });

}



