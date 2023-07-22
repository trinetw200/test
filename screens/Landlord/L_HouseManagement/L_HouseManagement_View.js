import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

const L_HouseManagement_View = ({ navigation }) => {
  const dropdownOptions = ['101', '102', '103']; //從DB抓

  const handleDropdownSelect = (index, option) => {
    console.log(`Selected index: ${index}, Selected option: ${option}`);
  };

  return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <ModalDropdown
        options={dropdownOptions}
        onSelect={handleDropdownSelect}
        defaultValue="選擇房號"
        style={{ padding: 10, borderWidth: 1, borderColor: 'black' }}
        textStyle={{ fontSize: 16 }}
        dropdownStyle={{ height: 200 }}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('L_HouseManagement_Insert')}>
          <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default L_HouseManagement_View;
