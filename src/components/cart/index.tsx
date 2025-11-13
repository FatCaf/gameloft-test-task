import { CartToggle } from './components/cart-toggle.tsx'
import { CartDrawer } from './components/cart-drawer.tsx'
import { useMemo, useState } from 'react'
import products from '../../products/products.tsx'
import { useCartTotals } from '../../hooks/useCartTotals.ts'
import { useCart } from '../../hooks/useCart.ts'

export function Cart({ currency = 'USD', title = 'Your Cart' }) {
    const { cartValues, clearCart, changeQuantity, removeItem } = useCart()
    const [open, setOpen] = useState(false)

    const normalized = useMemo(() => {
        return products
            .filter((p) => cartValues[p.id])
            .map((i) => ({
                ...i,
                quantity: cartValues[i.id],
            }))
    }, [cartValues])

    const count = useMemo(
        () => normalized.reduce((acc, i) => acc + (i.quantity ?? 1), 0),
        [normalized]
    )

    const subtotal = useCartTotals(normalized)

    return (
        <>
            <CartToggle count={count} onClick={() => setOpen(true)} />

            {open && (
                <CartDrawer
                    title={title}
                    currency={currency}
                    subtotal={subtotal}
                    normalized={normalized}
                    onClose={() => setOpen(false)}
                    onQuantityChange={changeQuantity}
                    clearCart={clearCart}
                    onRemoveItem={removeItem}
                />
            )}
        </>
    )
}
