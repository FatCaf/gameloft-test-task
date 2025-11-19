import { useMemo } from 'react'
import { DISCOUNT_AMOUNT, DISCOUNT_PERCENTAGE } from '../constants/constants.ts'
import type { ProductWithoutDescription, Subtotal } from '../types'

export function useCartTotals(
    normalized: ProductWithoutDescription[]
): Subtotal {
    return useMemo<Subtotal>(() => {
        const items = normalized ?? []

        const { base, discount, finalPrice } = items.reduce(
            (acc, i) => {
                const qty = i.quantity ?? 1
                const price = i.price ?? 0
                const lineBase = price * qty
                const lineDiscountRate =
                    qty > DISCOUNT_AMOUNT ? DISCOUNT_PERCENTAGE : 0
                const lineDiscount = lineBase * lineDiscountRate
                const lineFinal = lineBase - lineDiscount

                acc.base += lineBase
                acc.discount += lineDiscount
                acc.finalPrice += lineFinal
                return acc
            },
            { base: 0, finalPrice: 0, discount: 0 }
        )

        return {
            totalPrice: base,
            discount,
            finalPrice,
            discountRate: finalPrice === base ? 0 : DISCOUNT_PERCENTAGE,
        }
    }, [normalized])
}
