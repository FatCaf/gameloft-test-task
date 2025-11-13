import { useMemo } from 'react'
import { DISCOUNT_AMOUNT, DISCOUNT_PERCENTAGE } from '../constants/constants.ts'
import type { ProductWithoutDescription, Subtotal } from '../types'

export function useCartTotals(
    normalized: ProductWithoutDescription[]
): Subtotal {
    return useMemo<Subtotal>(() => {
        const items = normalized ?? []

        const { base, totalQty } = items.reduce(
            (acc, i) => {
                const qty = i.quantity ?? 1
                const price = i.price ?? 0
                acc.base += price * qty
                acc.totalQty += qty
                return acc
            },
            { base: 0, totalQty: 0 }
        )

        const hasBulkDiscount = totalQty > DISCOUNT_AMOUNT
        const discountRate = hasBulkDiscount ? DISCOUNT_PERCENTAGE : 0

        const totalPrice = base
        const discount = base * discountRate
        const finalPrice = base - discount

        return {
            totalPrice,
            discount,
            finalPrice,
            discountRate,
        }
    }, [normalized])
}
