import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";
import { firebaseConfig } from '../untils/FirebaseConfig';
import { generateUUID } from "../untils/GenerateUUID";

export class L_HouseManagementListModel {
    item = {
        houseId: '',
        title: '',
        price: '',
        image: ''
    };
    itemList = [];

    getHouseDataList(account, successCallBack) {
        const app = initializeApp(firebaseConfig);
        const db = ref(getDatabase(app));
        get(child(db, 'House/' + account )).then((snapshot) => {
            if (snapshot.exists()) { 
                for (const [key, value] of Object.entries(snapshot.val())) {
                    itemCopy = Object.assign({}, this.item);
                    itemCopy.houseId = key;
                    itemCopy.title = value.title;
                    itemCopy.price = value.price;
                    itemCopy.image = 'https://source.unsplash.com/random?sig='+generateUUID();
                    this.itemList.push(itemCopy);
                }
                successCallBack(this.itemList);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }
}