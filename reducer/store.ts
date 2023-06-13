import { configureStore } from '@reduxjs/toolkit'
import { cardListSlice } from '../components/cardList/cardListSlice'
import { favoriteListSlice } from '../components/favoriteList/favoriteListSlice'
import { checkoutSlice } from '../components/checkoutModal/checkoutModalSlice'

export const store = configureStore({
  reducer: {
    cardList: cardListSlice.reducer,
    favoriteList: favoriteListSlice.reducer,
    checkout: checkoutSlice.reducer,
  },
})