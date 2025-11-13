import { QuantityButton } from './quantity-button.tsx'
import { formatCurrency } from '../../../utils'
import type { ProductWithoutDescription, QuantityAction } from '../../../types'

type CartItemProps = ProductWithoutDescription & {
    onQuantityChange: (id: number, action: QuantityAction) => void
    onRemoveItem: (id: number) => void
}

export function CartItem({
    id,
    title,
    price,
    quantity,
    img,
    onQuantityChange,
    onRemoveItem,
}: CartItemProps) {
    const itemTotal = price * (quantity ?? 1)

    return (
        <div className="flex gap-3 rounded-lg border border-slate-200/70 p-3 dark:border-slate-800">
            <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-md bg-slate-100 dark:bg-slate-800">
                <img
                    src={img}
                    alt={title}
                    className={'h-full w-full object-cover'}
                />
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-2">
                    <h3
                        className="truncate text-sm font-semibold"
                        title={title}
                    >
                        {title}
                    </h3>
                    <div className="text-md text-slate-500 dark:text-slate-400">
                        <QuantityButton
                            label="-"
                            title="Substract"
                            onClick={() => onQuantityChange(id, 'remove')}
                        />
                        <span>x{quantity}</span>
                        <QuantityButton
                            label="+"
                            title="Add"
                            onClick={() => onQuantityChange(id, 'add')}
                        />
                    </div>
                </div>

                <div className="mt-1 flex items-center justify-between text-sm font-medium">
                    {formatCurrency(itemTotal)}
                    <button
                        onClick={() => onRemoveItem(id)}
                        className="ml-2 cursor-pointer text-red-500 hover:underline"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}
