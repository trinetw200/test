import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { firebaseConfig } from '../untils/FirebaseConfig';

export function writeUserData(type, name, account, password, sex, phone,successCallBack,failCallBack) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  set(ref(db, 'users/'+type+'/'+ account), {
    "name": name,
    "password": password,
    "sex" : sex,
    "phone" : phone
  }).then(() => {
    // Data saved successfully!
    successCallBack();
  }).catch((error) => {
    // The write failed...
    failCallBack();
  });

}



