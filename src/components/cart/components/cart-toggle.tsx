type CartToggleProps = {
    count: number
    onClick: () => void
}

export function CartToggle({ count, onClick }: CartToggleProps) {
    return (
        <button
            onClick={onClick}
            className="fixed top-4 right-4 z-40 inline-flex cursor-pointer items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-white shadow-lg hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
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
    )
}
