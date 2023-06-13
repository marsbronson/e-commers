import { Product } from '@/types/types'
import { createSlice } from '@reduxjs/toolkit'

interface favoriteListState {
    favoriteListModalOpen: boolean
    faroriteList: Product[]
}

const initialState: favoriteListState = {
  favoriteListModalOpen: false,
  faroriteList: []
}

export const favoriteListSlice = createSlice({
  name: 'favoriteList',
  initialState,
  reducers: {
    openFavoriteListModal: (state) => {
        state.favoriteListModalOpen = true
    },
    closeFavoriteListModal: (state) => {
        state.favoriteListModalOpen = false
    },
    addToFavorite: (state, action) => {
        state.faroriteList.push(action.payload)
    },
    removeFromFavorite: (state, action) => {
        state.faroriteList = state.faroriteList.filter((product) => product.title !== action.payload.title)
        if (state.faroriteList.length === 0) state.favoriteListModalOpen = false
    },
    clearFavoriteList: (state) => {
        state.faroriteList = []
        state.favoriteListModalOpen = false
    }
  },
})

export const selectFavoriteListModalOpen = (state: { favoriteList: favoriteListState }) => state.favoriteList.favoriteListModalOpen
export const selectFavoriteList = (state: { favoriteList: favoriteListState }) => state.favoriteList.faroriteList

// Action creators are generated for each case reducer function
export const { openFavoriteListModal, closeFavoriteListModal, addToFavorite, removeFromFavorite, clearFavoriteList } = favoriteListSlice.actions

export default favoriteListSlice