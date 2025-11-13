import { useLocalStorage } from '../../hooks/useLocalStorage.ts'
import type { CartItem, QuantityAction } from '../../types'
import { CartContext } from './context.ts'

type CartProviderProps = {
    children: React.ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
    const [cartValues, setCartValue] = useLocalStorage(
        'products',
        JSON.stringify({})
    )

    const parseCart = (prev: string | null): CartItem => {
        try {
            return prev ? JSON.parse(prev) : {}
        } catch (e) {
            console.error('Error parsing cart data from localStorage:', e)
            return {}
        }
    }

    const addToCart = (id: number) => {
        setCartValue((prev) => {
            const addedProducts = parseCart(prev)
            addedProducts[id] = (addedProducts[id] ?? 0) + 1
            return JSON.stringify(addedProducts)
        })
    }

    const changeQuantity = (id: number, action: QuantityAction) => {
        setCartValue((prev) => {
            const itemIds = parseCart(prev)
            const quantity = itemIds[id] ?? 0
            itemIds[id] = action === 'add' ? quantity + 1 : quantity - 1

            if (itemIds[id] <= 0) {
                delete itemIds[id]
            }

            return JSON.stringify(itemIds)
        })
    }

    const removeItem = (id: number) => {
        setCartValue((prev) => {
            const itemIds = parseCart(prev)
            delete itemIds[id]
            return JSON.stringify(itemIds)
        })
    }

    const clearCart = () => {
        setCartValue(() => JSON.stringify({}))
    }

    return (
        <CartContext.Provider
            value={{
                addToCart,
                changeQuantity,
                clearCart,
                removeItem,
                cartValues: parseCart(cartValues),
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
