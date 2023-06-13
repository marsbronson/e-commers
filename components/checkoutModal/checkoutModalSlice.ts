import { createSlice } from '@reduxjs/toolkit'

interface CheckoutState {
    checkoutModalOpen: boolean
}

const initialState: CheckoutState = {
  checkoutModalOpen: false,
}

export const checkoutSlice = createSlice({
  name: 'Checkout',
  initialState,
  reducers: {
    openCheckoutModal: (state) => {
        state.checkoutModalOpen = true
    },
    closeCheckoutModal: (state) => {
        state.checkoutModalOpen = false
    },
  },
})

export const selectCheckoutModalOpen = (state: { checkout: CheckoutState }) => state.checkout.checkoutModalOpen

// Action creators are generated for each case reducer function
export const { openCheckoutModal, closeCheckoutModal } = checkoutSlice.actions

export default checkoutSlice