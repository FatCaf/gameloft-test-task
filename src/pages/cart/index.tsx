import React, { useEffect, useMemo, useState } from 'react'

export type SimpleCartItem = {
    id: string | number
    title: string
    price: number
    quantity?: number
    thumb?: React.ReactNode
}

function formatCurrency(value: number, currency = 'USD', locale?: string) {
    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
        }).format(value)
    } catch {
        return `$${value.toFixed(2)}`
    }
}

export default function CartDrawerWithButton({
    items = [],
    currency = 'USD',
    title = 'Your Cart',
}: {
    items?: SimpleCartItem[]
    currency?: string
    title?: string
}) {
    const [open, setOpen] = useState(false)

    const normalized = useMemo(
        () =>
            items.map((i) => ({
                ...i,
                quantity: Math.max(1, Math.floor(i.quantity ?? 1)),
            })),
        [items]
    )

    const count = useMemo(
        () => normalized.reduce((acc, i) => acc + (i.quantity ?? 1), 0),
        [normalized]
    )
    const subtotal = useMemo(
        () =>
            normalized.reduce((acc, i) => acc + i.price * (i.quantity ?? 1), 0),
        [normalized]
    )

    useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
        document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [open])

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-4 py-2 shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                aria-label="Open cart"
                data-testid="cart-toggle"
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L21 6H6"></path>
                </svg>
                <span className="text-sm font-semibold">Cart</span>
                <span
                    className="ml-1 inline-flex min-w-6 justify-center rounded-full bg-white/20 px-2 text-xs font-bold"
                    aria-live="polite"
                >
                    {count}
                </span>
            </button>

            {open && (
                <div
                    className="fixed inset-0 z-50"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                        data-testid="cart-backdrop"
                    />

                    <aside className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xl flex flex-col translate-x-0 transition-transform">
                        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200/60 dark:border-slate-700/60">
                            <h2 className="text-lg font-semibold">{title}</h2>
                            <button
                                onClick={() => setOpen(false)}
                                className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
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
                            className="flex-1 overflow-auto p-4 space-y-3"
                            data-testid="cart-items"
                        >
                            {normalized.length === 0 ? (
                                <div className="text-center text-slate-500 py-16">
                                    <p className="text-sm">
                                        Your cart is empty.
                                    </p>
                                    <p className="text-xs mt-1">
                                        Add products from the carousel.
                                    </p>
                                </div>
                            ) : (
                                normalized.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex gap-3 rounded-lg border border-slate-200/70 dark:border-slate-800 p-3"
                                    >
                                        <div className="h-16 w-16 shrink-0 rounded-md bg-slate-100 dark:bg-slate-800 grid place-items-center overflow-hidden">
                                            <div className="scale-75">
                                                {item.thumb}
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2">
                                                <h3
                                                    className="text-sm font-semibold truncate"
                                                    title={item.title}
                                                >
                                                    {item.title}
                                                </h3>
                                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                                    x{item.quantity}
                                                </span>
                                            </div>
                                            <div className="mt-1 text-sm font-medium">
                                                {formatCurrency(
                                                    item.price *
                                                        (item.quantity ?? 1),
                                                    currency
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="border-t border-slate-200/60 dark:border-slate-700/60 p-4 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Subtotal</span>
                                <span
                                    className="font-medium"
                                    data-testid="cart-subtotal"
                                >
                                    {formatCurrency(subtotal, currency)}
                                </span>
                            </div>
                            <div className="flex items-center pt-3">
                                <button
                                    onClick={() => setOpen(false)}
                                    className="ml-auto inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500"
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            )}
        </>
    )
}
