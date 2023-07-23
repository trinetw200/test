import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, get, child, remove } from "firebase/database";
import { firebaseConfig } from '../untils/FirebaseConfig';

export class L_HouseManagementFormModel {
  houseData = {
    title: '',
    roomname: '',
    price: '',
    address: '',
    area: '',
    pattern: '',
    floor: '',
    lease_term: '',
    management_fee: '',
    pet: false,
    cook: false,
    landlord_name: '',
    landlord_phone: '',
    device: {
      bed: false,
      fridge: false,
      airConditioner: false,
      Wardrobe: false,
      tables_and_chairs: false,
      TV: false,
      WIFI: false,
      washing_machine: false,
    },
    isRentHouse: false
  }

  writeHouseData(account, successCallBack, failCallBack) {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const postListRef = ref(db, 'House/' + account);
    const newPostRef = push(postListRef);
    set(newPostRef, this.houseData).then(() => {
      // Data saved successfully!
      successCallBack();
    }).catch((error) => {
      // The write failed...
      console.error(error);
      failCallBack();
    });
  }

  getHouseData(account, houseId, successCallBack) {
    const app = initializeApp(firebaseConfig);
    const db = ref(getDatabase(app));
    get(child(db, 'House/' + account+'/'+houseId)).then((snapshot) => {
      if (snapshot.exists()) {
        this.houseData = {...this.houseData,...snapshot.val()};
        successCallBack();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  updateHouseData(account, houseId, successCallBack, failCallBack) {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const postListRef = ref(db, 'House/' + account +'/' +houseId);
    set(postListRef, this.houseData).then(() => {
      // Data saved successfully!
      successCallBack();
    }).catch((error) => {
      // The write failed...
      console.error(error);
      failCallBack();
    });
  }

  static deleteHouseData(account, houseId, successCallBack, failCallBack){
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const postRef = ref(db, 'House/' + account +'/' +houseId);
    remove(postRef).then(() => {
      // Data saved successfully!
      successCallBack();
    }).catch((error) => {
      // The write failed...
      console.error(error);
      failCallBack();
    });
  }
}



