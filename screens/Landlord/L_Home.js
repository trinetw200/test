import * as React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

function Separator({ length }) {
  return <View style={{ borderTopWidth: 1, borderTopColor: 'gray', marginVertical: 10, width: length }} />;
}

export default function L_Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Top Section */}
      <View style={{ flexDirection: 'row', marginBottom: 20, alignItems: 'center' }}>
        <Image source={require('../../assets/user.png')} style={{ width: 50, height: 50 }}/>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('L_HouseManagement_View')}>
          <Text style={styles.buttonText}>檢視房屋</Text>
        </TouchableOpacity>
      </View>

      {/* Middle Section */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ textAlign: 'left' }}>OOO 先生 / 小姐您好：</Text>
        <Text style={{ textAlign: 'left' }}>以下是您房屋出租的狀態。</Text>
      </View>

      {/* Bottom Section */}
      <View style={{ marginBottom: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderColor: '#406E9F', borderWidth: 1, borderRadius: 10, padding: 10 }}>
          <View style={{ backgroundColor: '#E2E8F0', padding: 10, borderRadius: 5, marginRight: 10 }}>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>總房數</Text>
            <Text style={{ textAlign: 'center' }}>DB抓取</Text>
          </View>
          <View style={{ backgroundColor: '#E2E8F0', padding: 10, borderRadius: 5, marginRight: 10 }}>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>出租中</Text>
            <Text style={{ textAlign: 'center' }}>DB抓取</Text>
          </View>
          <View style={{ backgroundColor: '#E2E8F0', padding: 10, borderRadius: 5 }}>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>空屋數</Text>
            <Text style={{ textAlign: 'center' }}>DB抓取</Text>
          </View>
        </View>
        <Text></Text>
        <Separator length={370} />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ textAlign: 'center', fontSize: 25 }}>通知</Text>
          <Text></Text>
          <Text style={{ textAlign: 'center', fontSize: 15, color: 'red' }}>菇菇PART</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#406E9F',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // separator: {
  //   height: 2,
  //   backgroundColor: '#CED0CE',
  //   marginVertical: 20,
  // },
});


