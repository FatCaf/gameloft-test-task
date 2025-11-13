import { CartItem } from './cart-item.tsx'
import { Subtotal } from './subtotal.tsx'
import type {
    ProductWithoutDescription,
    QuantityAction,
    Subtotal as SubtotalType,
} from '../../../types'

interface CartSidebarProps {
    title: string
    currency: string
    subtotal: SubtotalType
    normalized: ProductWithoutDescription[]
    onClose: () => void
    onQuantityChange: (id: number, action: QuantityAction) => void
    onRemoveItem: (id: number) => void
    clearCart: () => void
}

export function CartDrawer({
    title,
    currency,
    subtotal,
    normalized,
    onClose,
    onQuantityChange,
    clearCart,
    onRemoveItem,
}: CartSidebarProps) {
    return (
        <div className="fixed inset-0 z-[1001]" role="dialog" aria-modal="true">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
                data-testid="cart-backdrop"
            />

            <aside className="absolute top-0 right-0 flex h-full w-full translate-x-0 flex-col bg-white text-slate-900 shadow-xl transition-transform sm:w-[420px] dark:bg-slate-900 dark:text-slate-100">
                <div className="flex items-center justify-between border-b border-slate-200/60 px-5 py-4 dark:border-slate-700/60">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        aria-label="Close cart"
                        data-testid="cart-close"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div
                    className="flex-1 space-y-3 overflow-auto p-4"
                    data-testid="cart-items"
                >
                    {normalized.length === 0 ? (
                        <div className="py-16 text-center text-slate-500">
                            <p className="text-sm">Your cart is empty.</p>
                            <p className="mt-1 text-xs">
                                Add products from the carousel.
                            </p>
                        </div>
                    ) : (
                        normalized.map((item) => (
                            <CartItem
                                key={item.id}
                                {...item}
                                onQuantityChange={onQuantityChange}
                                onRemoveItem={onRemoveItem}
                            />
                        ))
                    )}
                </div>

                <Subtotal subtotal={subtotal} currency={currency} />

                <div className="flex items-center justify-end p-2">
                    <button
                        className="inline-flex cursor-pointer items-center justify-center rounded-md bg-red-500 px-4 py-2"
                        onClick={clearCart}
                    >
                        Clear cart
                    </button>
                </div>
            </aside>
        </div>
    )
}
