import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { L_HouseManagementFormModel } from '../../../models/L_HouseManagementFormModel';
import { CheckBox } from '@rneui/themed';
import { connect } from 'react-redux';

const Separator = () => {
    return <View style={styles.separator} />;
};


class L_HouseManagement_Form extends Component {

    constructor(props) {
        super(props);
        this.houseModel = new L_HouseManagementFormModel();
        this.state = this.houseModel.houseData;
    }

    componentDidMount() {
        const userInfoData = this.props.userInfoData;
        if (this.props.houseId) {
            //取得租屋資訊
            this.houseModel.getHouseData(userInfoData.account, this.props.houseId, () => {
                const newHouseData = this.houseModel.houseData;
                this.setState(newHouseData);
            });
        } else {
            this.setState(({ ...this.state, landlord_phone: userInfoData.phone, landlord_name: userInfoData.name }));
        }
    }

    handleRegister() {
        const userInfoData = this.props.userInfoData;
        if (this.props.houseId) {
            // 處理更新邏輯
            const successCallBack = () => {
                Alert.alert('', '更新成功', [
                    { text: '完成', onPress: () => this.props.back() },
                ]);
            }
            const failCallBack = () => {
                Alert.alert('', '更新失敗');
            }
            this.houseModel.houseData = this.state;
            this.houseModel.updateHouseData(userInfoData.account, this.props.houseId, successCallBack, failCallBack);
        } else {
            // 處理新增邏輯
            const successCallBack = () => {
                Alert.alert('', '新增成功', [
                    { text: '完成', onPress: () => this.props.back() },
                ]);
            }
            const failCallBack = () => {
                Alert.alert('', '新增失敗');
            }
            this.houseModel.houseData = this.state;
            this.houseModel.writeHouseData(userInfoData.account, successCallBack, failCallBack);
        }
    }

    render() {
        const houseData = this.state;
        const { device } = this.state;

        return (
            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>標題：　</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="輸入標題"
                        defaultValue={houseData.title}
                        onEndEditing={(event) => houseData.title = event.nativeEvent.text}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>房間名稱：　</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="輸入房間名稱"
                        defaultValue={houseData.roomname}
                        onEndEditing={(event) => houseData.roomname = event.nativeEvent.text}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>金額：　</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="輸入金額"
                        keyboardType="numeric"
                        defaultValue={houseData.price}
                        onEndEditing={(event) => houseData.price = event.nativeEvent.text}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>地址：　</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="輸入地址"
                        defaultValue={houseData.address}
                        onEndEditing={(event) => houseData.address = event.nativeEvent.text}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>坪數：　</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="輸入坪數"
                        keyboardType="numeric"
                        defaultValue={houseData.area}
                        onEndEditing={(event) => houseData.area = event.nativeEvent.text}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>格局：　</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="X房X廳X衛"
                        defaultValue={houseData.pattern}
                        onEndEditing={(event) => houseData.pattern = event.nativeEvent.text}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>樓層：　</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="X樓"
                        keyboardType="numeric"
                        defaultValue={houseData.floor}
                        onEndEditing={(event) => houseData.floor = event.nativeEvent.text}
                    />
                </View>

                <Separator />

                <Text style={styles.inputLabel}>屋況介紹</Text>
                <Text></Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>租期：　</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="請輸入租期"
                        keyboardType="numeric"
                        defaultValue={houseData.lease_term}
                        onEndEditing={(event) => houseData.lease_term = event.nativeEvent.text}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>管理費：</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="請輸入管理費"
                        keyboardType="numeric"
                        defaultValue={houseData.management_fee}
                        onEndEditing={(event) => houseData.management_fee = event.nativeEvent.text}
                    />
                </View>

                <View style={styles.radioContainer}>
                    <Text>寵物：</Text>
                    <CheckBox
                        title="不可養"
                        checked={houseData.pet === false}
                        onPress={() => this.setState(({ ...houseData, pet: false }))}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <CheckBox
                        title="可養"
                        checked={houseData.pet === true}
                        onPress={() => this.setState(({ ...houseData, pet: true }))}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View>

                <View style={styles.radioContainer}>
                    <Text>開伙：</Text>
                    <CheckBox
                        title="不可開"
                        checked={houseData.cook === false}
                        onPress={() => this.setState(({ ...houseData, cook: false }))}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <CheckBox
                        title="可開"
                        checked={houseData.cook === true}
                        onPress={() => this.setState(({ ...houseData, cook: true }))}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View>

                <Separator />

                <Text style={styles.inputLabel}>提供設備</Text>
                <Text></Text>
                <View style={styles.checkBoxContainer}>
                    <View style={styles.checkBoxItem}>
                        <Image source={require('../../../assets/bed.png')} style={styles.icon} />
                        <CheckBox
                            checked={device.bed}
                            onPress={() => {
                                device.bed = !device.bed
                                this.setState(({ ...houseData }))
                            }}
                        />
                    </View>
                    <View style={styles.checkBoxItem}>
                        <Image source={require('../../../assets/fridge.png')} style={styles.icon} />
                        <CheckBox
                            checked={device.fridge}
                            onPress={() => {
                                device.fridge = !device.fridge
                                this.setState(({ ...houseData }))
                            }}
                        />
                    </View>
                    <View style={styles.checkBoxItem}>
                        <Image source={require('../../../assets/air-conditioner.png')} style={styles.icon} />
                        <CheckBox
                            checked={device.airConditioner}
                            onPress={() => {
                                device.airConditioner = !device.airConditioner
                                this.setState(({ ...houseData }))
                            }}
                        />
                    </View>
                    <View style={styles.checkBoxItem}>
                        <Image source={require('../../../assets/wardrobe.png')} style={styles.icon} />
                        <CheckBox
                            checked={device.Wardrobe}
                            onPress={() => {
                                device.Wardrobe = !device.Wardrobe
                                this.setState(({ ...houseData }))
                            }}
                        />
                    </View>
                    <View style={styles.checkBoxItem}>
                        <Image source={require('../../../assets/tables_and_chairs.png')} style={styles.icon} />
                        <CheckBox
                            checked={device.tables_and_chairs}
                            onPress={() => {
                                device.tables_and_chairs = !device.tables_and_chairs
                                this.setState(({ ...houseData }))
                            }}
                        />
                    </View>
                    <View style={styles.checkBoxItem}>
                        <Image source={require('../../../assets/television.png')} style={styles.icon} />
                        <CheckBox
                            checked={device.TV}
                            onPress={() => {
                                device.TV = !device.TV
                                this.setState(({ ...houseData }))
                            }}
                        />
                    </View>
                    <View style={styles.checkBoxItem}>
                        <Image source={require('../../../assets/wifi.png')} style={styles.icon} />
                        <CheckBox
                            checked={device.WIFI}
                            onPress={() => {
                                device.WIFI = !device.WIFI
                                this.setState(({ ...houseData }))
                            }}
                        />
                    </View>
                    <View style={styles.checkBoxItem}>
                        <Image source={require('../../../assets/washing-machine.png')} style={styles.icon} />
                        <CheckBox
                            checked={device.washing_machine}
                            onPress={() => {
                                device.washing_machine = !device.washing_machine
                                this.setState(({ ...houseData }))
                            }}
                        />
                    </View>
                </View>

                <Separator />

                <Text style={styles.inputLabel}>房東聯絡資訊</Text>
                <Text></Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>姓名：　</Text>
                    <TextInput
                        style={styles.input}
                        defaultValue={houseData.landlord_name}
                        onEndEditing={(event) => houseData.landlord_name = event.nativeEvent.text}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>電話：　</Text>
                    <TextInput
                        style={styles.input}
                        defaultValue={houseData.landlord_phone}
                        onEndEditing={(event) => houseData.landlord_phone = event.nativeEvent.text}
                    />
                </View>
                <View style={styles.radioContainer}>
                    <Text>房屋狀態：</Text>
                    <CheckBox
                        title="空屋"
                        checked={houseData.isRentHouse === false}
                        onPress={() => this.setState(({ ...houseData, isRentHouse: false }))}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <CheckBox
                        title="出租"
                        checked={houseData.isRentHouse === true}
                        onPress={() => this.setState(({ ...houseData, isRentHouse: true }))}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => this.handleRegister()}>
                    <Text style={styles.buttonText}>{this.props.houseId ? "修改" : "新增"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.buttonText}>返回</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

export default connect(state => ({userInfoData:state.userInfoData}))(L_HouseManagement_Form)

const styles = StyleSheet.create({
    form: {
        width: '60%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 5,
        flex: 1,
        width: 'auto',
    },
    checkBoxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: 10,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    inputLabel: {
        fontSize: 14,
        marginRight: 3,
        textAlign: 'center'
    },
    checkBoxItem: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 10,
        marginBottom: 20,
    },
    icon: {
        width: 32,
        height: 32,
        marginBottom: 5,
    },
    separator: {
        height: 2,
        backgroundColor: '#CED0CE',
        marginVertical: 20,
    },
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
    }
});