import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from './reducers/userInfoSlice'

export default configureStore({
  reducer: {
    userInfoData: userInfoReducer,
  },
})