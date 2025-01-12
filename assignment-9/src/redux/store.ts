import { combineReducers, configureStore } from "@reduxjs/toolkit";
import product from "./features/product";
import cartSlice from "./features/cartSlice";
import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};

const reducer = combineReducers({
  products: product,
  cart: cartSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;