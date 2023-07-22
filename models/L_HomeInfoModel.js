import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";
import { firebaseConfig } from '../untils/FirebaseConfig';

export default class L_HouseInfoModel {
    static GetHouseInfo(account,callback){
        const app = initializeApp(firebaseConfig);
        const db = ref(getDatabase(app));
        get(child(db, 'House/' + account)).then((snapshot) => {
          if (snapshot.exists()) {
            var total = 0;
            var rentCount = 0;
            var emptyCount = 0;
            snapshot.forEach((child) => {
              if(child.val().isRentHouse === true) {
                rentCount++;
              } else {
                emptyCount++;
              }
              total++;
            });
            callback(total,rentCount,emptyCount);
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
    }
}