import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { UploadImageAsync } from '../untils/ImageUpload';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log(result);

    if (!result.canceled) {
      const uploadUrl = await UploadImageAsync(result.assets[0].uri);
      console.log(uploadUrl);
      setImage(uploadUrl);
    }
  };

  const takePhoto = async () => {

    let permiss = await ImagePicker.getCameraPermissionsAsync();
    if (!permiss.granted){
      permiss = await ImagePicker.requestCameraPermissionsAsync();
    } 

    console.log('permiss:',permiss);
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const uploadUrl = await UploadImageAsync(result.assets[0].uri);
      console.log(uploadUrl);
      setImage(uploadUrl);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="takePhotol" onPress={takePhoto} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};