import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { carReducer } from "./sliceCar";
import { favoriteReducer } from "./sliceFavorites";
// import { favoriteReducer } from "./favoriteReducer";

const carsPersistConfig = {
  key: "cars",
  storage,
  whitelist: ["favorite"],
};

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorite"],
};

const store = configureStore({
  reducer: {
    cars: persistReducer(carsPersistConfig, carReducer),
    favorites: persistReducer(favoritesPersistConfig, favoriteReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
