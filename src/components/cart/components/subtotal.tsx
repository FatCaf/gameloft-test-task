import { formatCurrency } from '../../../utils'
import { type Subtotal as SubtotalType } from '../../../types'

type Props = { subtotal: SubtotalType; currency: string }

export const Subtotal = ({ currency, subtotal }: Props) => {
    return (
        <div className="space-y-2 border-t border-slate-200/60 p-4 dark:border-slate-700/60">
            <div className="space-y-2 text-sm">
                <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Subtotal</span>
                    <span className="font-medium" data-testid="cart-subtotal">
                        {formatCurrency(subtotal.totalPrice, currency)}
                    </span>
                </div>

                {subtotal.discountRate > 0 && (
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500">
                            Discount{' '}
                            <span data-testid="cart-discount-rate">
                                ({(subtotal.discountRate * 100).toFixed(0)}
                                %)
                            </span>
                        </span>
                        <span
                            className="font-medium"
                            data-testid="cart-discount"
                        >
                            -{formatCurrency(subtotal.discount, currency)}
                        </span>
                    </div>
                )}

                <div className="my-2 border-t border-slate-700" />

                <div className="flex justify-between">
                    <span className="font-medium text-slate-200">Total</span>
                    <span
                        className="text-base font-semibold"
                        data-testid="cart-total"
                    >
                        {formatCurrency(subtotal.finalPrice, currency)}
                    </span>
                </div>
            </div>
        </div>
    )
}
