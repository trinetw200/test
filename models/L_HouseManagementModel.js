import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { firebaseConfig } from '../untils/FirebaseConfig';

export function WriteHouseData(roomname,price,address,area,pattern,floor,lease_term,management_fee,pet,cook,device) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  set(ref(db, 'House/'+"123"+'/'+roomname), {
    "price": price,
    "address": address,
    "area" : area,
    "pattern" : pattern,
    "floor" : floor,
    "lease_term" : lease_term,
    "management_fee" : management_fee,
    "pet" : pet,
    "cook" : cook,
    "device" : device,
  }).then(() => {
    // Data saved successfully!
    successCallBack();
  }).catch((error) => {
    // The write failed...
    failCallBack();
  });

}



