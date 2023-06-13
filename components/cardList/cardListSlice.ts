import { Product } from '@/types/types'
import { createSlice } from '@reduxjs/toolkit'

interface ProductAmount {
    product: Product,
    amount: number
}

interface CardListState {
    cardListModalOpen: boolean,
    cardList: ProductAmount[]
}

const initialState: CardListState = {
  cardListModalOpen: false,
  cardList: []
}

export const cardListSlice = createSlice({
  name: 'cardList',
  initialState,
  reducers: {
    openCardListModal: (state) => {
        state.cardListModalOpen = true
    },
    closeCardListModal: (state) => {
        state.cardListModalOpen = false
    },
    addToCardList: (state, action) => {
        const product = action.payload
        const productInList = state.cardList.find((productAmount) => productAmount.product.title === product.title)
        if (productInList) {
            productInList.amount += 1
        } else {
            state.cardList.push({ product, amount: 1 })
        }
    },
    removeAmountFromCardList: (state, action) => {
        const product = action.payload
        const productInList = state.cardList.find((productAmount) => productAmount.product.title === product.title)
        if (productInList) {
            productInList.amount -= 1
            if (productInList.amount === 0) {
                state.cardList = state.cardList.filter((productAmount) => productAmount.product.title !== product.title)
                if (state.cardList.length === 0) state.cardListModalOpen = false
            }
        }
    },
    removeFromCardList: (state, action) => {
        const product = action.payload
        state.cardList = state.cardList.filter((productAmount) => productAmount.product.title !== product.title)
        if (state.cardList.length === 0) state.cardListModalOpen = false
    },
    clearCardList: (state) => {
        state.cardList = []
        state.cardListModalOpen = false
    }
  },
})

export const selectCardListModalOpen = (state: { cardList: CardListState }) => state.cardList.cardListModalOpen
export const selectCardList = (state: { cardList: CardListState }) => state.cardList.cardList

// Action creators are generated for each case reducer function
export const { openCardListModal, closeCardListModal, addToCardList, removeAmountFromCardList, removeFromCardList, clearCardList } = cardListSlice.actions

export default cardListSlice