import React, { useState } from 'react';
import { Button, Image, View, ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
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
        result.assets.map(async (asset) => {
          await UploadImageAsync(asset.uri).then((uploadUrl) => {
            urls.push(uploadUrl);
          })
        }
        ));

      setImages([...images, ...urls]);
    }
  };

  const takePhoto = async () => {

    let permiss = await ImagePicker.getCameraPermissionsAsync();
    if (!permiss.granted) {
      permiss = await ImagePicker.requestCameraPermissionsAsync();
    }

    console.log('permiss:', permiss);
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
    <View style={imageStyle.container}>
      <View style={imageStyle.wrapperContainer}>
      <View style={imageStyle.swiperContainer}>
        {images.length !== 0 ? (
          <Swiper showsButtons loop={true}>
            {images.map((image) => (
              <View key={image} style={imageStyle.slide1}>
                <Image source={{ uri: image }} style={{ width: 350, height: 350 }} />
              </View>
            ))}
          </Swiper>
        ) : (
          <></>
        )}
        </View>
      </View>

      <View style={imageStyle.buttonsContainer}>
        
        <TouchableOpacity style={imageStyle.button} onPress={pickImage}>
        <Image
          source={require('../assets/add.png')}
          style={{ width: 45, height: 45 }}
        />
        </TouchableOpacity>
        <TouchableOpacity style={imageStyle.button} onPress={takePhoto}>
        <Image
          source={require('../assets/camera.png')}
          style={{ width: 50, height: 50 }}
        />
        </TouchableOpacity>

      </View>
      {/* {images.map((image) =>
        <Image key={image} source={{ uri: image }} style={{width: 200, height: 200}} />
      )} */}

      {/* <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> */}
      {/* <Swiper style={imageStyle.wrapper} showsButtons loop={true}>
        {images != null ?images.map((image) => 
           
          <View key={image} style={imageStyle.slide1}>
            <Image key={image} source={{ uri: image }} style={{width: 200, height: 200}} />
          </View>
          
        ):''}
      </Swiper> */}

      {/* <Swiper style={imageStyle.wrapper} showsButtons loop={true}>
        {images != null ?images.map((image) => 
           
          <View key={image} style={imageStyle.slide1}>
            <Image key={image} source={{ uri: image }} style={{width: 200, height: 200}} />
          </View>
          
        ):''}
      </Swiper> */}

    </View>
  );
};


const imageStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperContainer: {
    flex: 1,
    justifyContent: 'center', // 將 Swiper 置中
    alignItems: 'flex-start', // 將 Swiper 垂直向上對齊
    maxHeight: 350, // 調整此值來縮小 Swiper 的高度
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
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
  wrapperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    maxHeight: 350,
    marginTop: -550, // 調整此值來將容器及其內容向上移動
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#8FAADC',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});