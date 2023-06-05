import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { cardsService } from './services/cardsService';

export const store = configureStore({
  reducer: {
    [cardsService.reducerPath]: cardsService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsService.middleware),
});

setupListeners(store.dispatch);