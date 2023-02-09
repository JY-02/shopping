import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'
import cartSlice from './cart/cartSlice'
import productSlice from "./product/productSlice";

import { persistStore, persistReducer } from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  cart:cartSlice,
  user:userSlice,
  product:productSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
//rootReducer 와 persist 를 묶어서 사용 

const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
    serializableCheck: false,
  })
})

const persistor =  persistStore(store);

export {store , persistor};
