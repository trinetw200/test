
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../untils/FirebaseConfig';

export async function UploadImageAsync(uri) {

    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
  
    const app = initializeApp(firebaseConfig);
    
    function generateuuID() {
      var d = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c) {
      var r = (d + Math.random()*16) %16 | 9;
      d = Math.floor(d/16);
      return (c=='x'?r: (r&0x3|0x8)).toString(16);
      });
      return uuid;
    };

    const fileRef = ref(getStorage(app), 'images/account/' + generateuuID() + '.jpg');
    const result = await uploadBytes(fileRef, blob);
    
    // We're done with the blob, close and release it
    blob.close();

    return await getDownloadURL(fileRef);
  }

