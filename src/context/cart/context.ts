import { createContext } from 'react'
import type { CartItem, QuantityAction } from '../../types'

type CartContextType = {
    addToCart: (id: number) => void
    changeQuantity: (id: number, action: QuantityAction) => void
    removeItem: (id: number) => void
    clearCart: () => void
    cartValues: CartItem
}

export const CartContext = createContext<CartContextType | undefined>(undefined)
