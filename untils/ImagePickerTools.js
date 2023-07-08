import React, { useState } from 'react';
import { Button, Image, View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { UploadImageAsync } from '../untils/ImageUpload';
import PagerView from 'react-native-pager-view';
import Swiper from 'react-native-swiper';

export default function ImagePickerExample() {
  const [images, setImages] = useState([]);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      const urls = [];
      await Promise.all(
        result.assets.map ( async (asset) => {
          await UploadImageAsync(asset.uri).then((uploadUrl) =>{
            urls.push(uploadUrl);
        })}
      ));

      setImages([...images,...urls]);
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
      setImages([...images, uploadUrl]);;
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="takePhotol" onPress={takePhoto} />

      {/* {images.map((image) =>
        <Image key={image} source={{ uri: image }} style={{width: 200, height: 200}} />
      )} */}
      
      {/* <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> */}
      {/* <Swiper style={styles.wrapper} showsButtons loop={true}>
        {images != null ?images.map((image) => 
           
          <View key={image} style={styles.slide1}>
            <Image key={image} source={{ uri: image }} style={{width: 200, height: 200}} />
          </View>
          
        ):''}
      </Swiper> */}

      {/* <Swiper style={styles.wrapper} showsButtons loop={true}>
        {images != null ?images.map((image) => 
           
          <View key={image} style={styles.slide1}>
            <Image key={image} source={{ uri: image }} style={{width: 200, height: 200}} />
          </View>
          
        ):''}
      </Swiper> */}
    {images.length != 0 ? 
      <Swiper style={styles.wrapper} showsButtons loop={true}>
      {images.length != 0 && images.map((image,index) => 
        
        <View  style={styles.slide1}>
          <Image key={index} source={{ uri: image }} style={{width: '100%', height: '100%'}} />
        </View>
        
      )}
      </Swiper>:<></>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  loadingContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});