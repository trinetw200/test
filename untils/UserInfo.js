import AsyncStorage from '@react-native-async-storage/async-storage';

export async function SaveUserInfo(account,name,phone,type) {
    try {
        await AsyncStorage.setItem('account', account.toString());
        await AsyncStorage.setItem('name', name.toString());
        await AsyncStorage.setItem('phone', phone.toString());
        await AsyncStorage.setItem('type', type.toString());
      } catch (e) {
        // saving error
    }
}

export async function GetUserName() {
    return await AsyncStorage.getItem('name');
}
export async function GetUserAccount() {
    return await AsyncStorage.getItem('account');
}
export async function GetUserPhone() {
    return await AsyncStorage.getItem('phone');
}
export async function GetUserType() {
    return parseInt(await AsyncStorage.getItem('type'));
}