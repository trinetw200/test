import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from '../untils/FirebaseConfig';

export function login(account,password,type) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Realtime Database and get a reference to the service
    const database = getDatabase(app);
    const dbRef = ref(database, 'users/'+type+'/'+account+'/password');
    onValue(dbRef, (snapshot) => {
        if (snapshot.val() == password) {
            alert("登入成功");
        } else {
            alert("登入失敗");
        }
    });
}
