import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'userInfoData',
  initialState: {
    account: '',
    name: '',
    phone: '',
    isLongin: false,
    isLandlord: false
},
  reducers: {
    userLogin: (state, action) => {
        const {payload} = action;
        state.account = payload.account;
        state.name = payload.name;
        state.phone = payload.phone;
        state.isLongin = true;
        if (payload.type === 0) {
            state.isLandlord = false;
        } else {
            state.isLandlord = true;
          
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { userLogin } = userInfoSlice.actions
//export const userInfoData = (state) => state.userInfoData
export default userInfoSlice.reducer