import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseConfig } from '../untils/FirebaseConfig';

export function login(account,password,type,successCallBack,failCallBack) {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Realtime Database and get a reference to the service
    const database = getDatabase(app);
    const dbRef = ref(database, 'users/'+type+'/'+account);
    return onValue(dbRef, (snapshot) => {
        if (snapshot.val() != null && snapshot.val().password == password) {
            successCallBack(account,snapshot.val().name,snapshot.val().phone,type);
        } else {
            failCallBack();
        }
    },{
        onlyOnce: true
    });
}

