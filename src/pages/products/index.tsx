import { useEffect, useRef, useState } from 'react'
import styles from './ProductCarousel.module.css'
import CartDrawerWithButton from '../cart'

const products = [
    {
        id: 1,
        title: 'Aurora Smartwatch',
        desc: 'Track health metrics, receive notifications, and enjoy a 7‑day battery life in a sleek form factor.',
        price: '$199',
        Svg: function AuroraSVG() {
            return (
                <svg
                    viewBox="0 0 800 600"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Aurora Smartwatch — Crystal Gem"
                >
                    <defs>
                        <linearGradient id="g1" x1="0" x2="1">
                            <stop offset="0" stopColor="#4568dc" />
                            <stop offset="1" stopColor="#b06ab3" />
                        </linearGradient>
                        <filter
                            id="glow1"
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                        >
                            <feGaussianBlur stdDeviation="6" result="b" />
                            <feMerge>
                                <feMergeNode in="b" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <rect width="800" height="600" fill="url(#g1)" />
                    {/* Gameloft-style crystal diamond */}
                    <g filter="url(#glow1)">
                        <polygon
                            points="400,160 520,300 400,440 280,300"
                            fill="rgba(255,255,255,.92)"
                        />
                        {/* facets */}
                        <polyline
                            points="400,160 400,440"
                            stroke="rgba(0,0,0,.18)"
                            strokeWidth="4"
                            fill="none"
                        />
                        <polyline
                            points="280,300 520,300"
                            stroke="rgba(0,0,0,.18)"
                            strokeWidth="4"
                            fill="none"
                        />
                        <polyline
                            points="400,160 520,300 400,320 280,300 400,160"
                            stroke="rgba(0,0,0,.18)"
                            strokeWidth="4"
                            fill="none"
                        />
                        {/* sparkles */}
                        <g fill="rgba(255,255,255,.95)">
                            <path d="M200 200 l10 20 l10 -20 l-10 -20 z" />
                            <path d="M610 180 l8 16 l8 -16 l-8 -16 z" />
                            <path d="M600 430 l9 18 l9 -18 l-9 -18 z" />
                        </g>
                    </g>
                </svg>
            )
        },
    },
    {
        id: 2,
        title: 'Nimbus Headphones',
        desc: 'Immersive noise‑cancellation with studio‑grade sound and ultra‑soft memory‑foam cushions.',
        price: '$149',
        Svg: function NimbusSVG() {
            return (
                <svg
                    viewBox="0 0 800 600"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Nimbus Headphones — Music Coin"
                >
                    <defs>
                        <linearGradient id="g2" x1="0" x2="1">
                            <stop offset="0" stopColor="#0fd850" />
                            <stop offset="1" stopColor="#f9f047" />
                        </linearGradient>
                        <filter
                            id="glow2"
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                        >
                            <feGaussianBlur stdDeviation="5" result="b" />
                            <feMerge>
                                <feMergeNode in="b" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <rect width="800" height="600" fill="url(#g2)" />
                    {/* Gameloft-style coin with music note */}
                    <g filter="url(#glow2)">
                        <circle
                            cx="400"
                            cy="300"
                            r="130"
                            fill="rgba(255,255,255,.95)"
                        />
                        <circle
                            cx="400"
                            cy="300"
                            r="110"
                            fill="none"
                            stroke="rgba(0,0,0,.18)"
                            strokeWidth="10"
                        />
                        {/* note stem */}
                        <rect
                            x="420"
                            y="220"
                            width="14"
                            height="120"
                            rx="7"
                            fill="rgba(0,0,0,.2)"
                        />
                        {/* note heads */}
                        <circle
                            cx="430"
                            cy="360"
                            r="28"
                            fill="rgba(0,0,0,.2)"
                        />
                        <circle
                            cx="380"
                            cy="350"
                            r="22"
                            fill="rgba(0,0,0,.2)"
                        />
                        {/* shine */}
                        <path
                            d="M320 250 q80 -70 160 0"
                            stroke="rgba(255,255,255,.9)"
                            strokeWidth="12"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </g>
                </svg>
            )
        },
    },
    {
        id: 3,
        title: 'Solace Speaker',
        desc: 'Room‑filling 360° audio in a compact body. Hands‑free voice control and multi‑room pairing.',
        price: '$129',
        Svg: function SolaceSVG() {
            return (
                <svg
                    viewBox="0 0 800 600"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Solace Speaker — Star Badge"
                >
                    <defs>
                        <linearGradient id="g3" x1="0" x2="1">
                            <stop offset="0" stopColor="#00c6ff" />
                            <stop offset="1" stopColor="#0072ff" />
                        </linearGradient>
                        <filter
                            id="glow3"
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                        >
                            <feGaussianBlur stdDeviation="5" result="b" />
                            <feMerge>
                                <feMergeNode in="b" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <rect width="800" height="600" fill="url(#g3)" />
                    {/* Gameloft-style star badge */}
                    <g filter="url(#glow3)">
                        <circle
                            cx="400"
                            cy="300"
                            r="120"
                            fill="rgba(255,255,255,.92)"
                        />
                        <polygon
                            points="400,220 430,290 505,295 450,340 465,410 400,370 335,410 350,340 295,295 370,290"
                            fill="rgba(0,0,0,.45)"
                        />
                        {/* ribbons */}
                        <rect
                            x="350"
                            y="410"
                            width="40"
                            height="40"
                            rx="6"
                            fill="rgba(255,255,255,.9)"
                        />
                        <rect
                            x="410"
                            y="410"
                            width="40"
                            height="40"
                            rx="6"
                            fill="rgba(255,255,255,.9)"
                        />
                    </g>
                </svg>
            )
        },
    },
    {
        id: 4,
        title: 'Lumen Desk Lamp',
        desc: 'Adjustable LED lamp with ambient glow and three color temperatures for focused work.',
        price: '$89',
        Svg: function LumenSVG() {
            return (
                <svg
                    viewBox="0 0 800 600"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Lumen Desk Lamp — Potion"
                >
                    <defs>
                        <linearGradient id="g4" x1="0" x2="1">
                            <stop offset="0" stopColor="#b06ab3" />
                            <stop offset="1" stopColor="#ff8a00" />
                        </linearGradient>
                        <filter
                            id="glow4"
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                        >
                            <feGaussianBlur stdDeviation="6" result="b" />
                            <feMerge>
                                <feMergeNode in="b" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <rect width="800" height="600" fill="url(#g4)" />
                    {/* Gameloft-style potion bottle */}
                    <g filter="url(#glow4)">
                        <rect
                            x="360"
                            y="170"
                            width="80"
                            height="24"
                            rx="8"
                            fill="rgba(255,255,255,.9)"
                        />
                        <path
                            d="M400 190 L420 230 Q460 260 450 320 Q440 390 400 420 Q360 390 350 320 Q340 260 380 230 Z"
                            fill="rgba(255,255,255,.92)"
                        />
                        {/* liquid */}
                        <path
                            d="M360 320 Q400 300 440 320 Q430 360 400 380 Q370 360 360 320 Z"
                            fill="rgba(0,0,0,.25)"
                        />
                        {/* bubbles */}
                        <circle
                            cx="390"
                            cy="305"
                            r="8"
                            fill="rgba(255,255,255,.95)"
                        />
                        <circle
                            cx="415"
                            cy="335"
                            r="6"
                            fill="rgba(255,255,255,.95)"
                        />
                    </g>
                </svg>
            )
        },
    },
    {
        id: 5,
        title: 'Pulse Fitness Band',
        desc: 'Heart‑rate tracking, sleep analysis, and 5‑ATM water resistance in a slim band.',
        price: '$99',
        Svg: function PulseSVG() {
            return (
                <svg
                    viewBox="0 0 800 600"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Pulse Fitness Band — Heart & Pulse"
                >
                    <defs>
                        <linearGradient id="g5" x1="0" x2="1">
                            <stop offset="0" stopColor="#ff6cab" />
                            <stop offset="1" stopColor="#7366ff" />
                        </linearGradient>
                        <filter
                            id="glow5"
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                        >
                            <feGaussianBlur stdDeviation="5" result="b" />
                            <feMerge>
                                <feMergeNode in="b" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <rect width="800" height="600" fill="url(#g5)" />
                    {/* Gameloft-style heart with ECG */}
                    <g filter="url(#glow5)">
                        <path
                            d="M400 420 C 300 360, 320 260, 400 280 C 480 260, 500 360, 400 420 Z"
                            fill="rgba(255,255,255,.92)"
                        />
                        <polyline
                            points="320,330 360,330 380,310 400,350 420,300 460,300"
                            fill="none"
                            stroke="rgba(0,0,0,.3)"
                            strokeWidth="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                </svg>
            )
        },
    },
    {
        id: 6,
        title: 'Vortex Drone',
        desc: 'Compact 4K camera drone with obstacle sensing and 28‑minute flight time.',
        price: '$299',
        Svg: function VortexSVG() {
            return (
                <svg
                    viewBox="0 0 800 600"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Vortex Drone — Winged Bolt"
                >
                    <defs>
                        <linearGradient id="g6" x1="0" x2="1">
                            <stop offset="0" stopColor="#00f5a0" />
                            <stop offset="1" stopColor="#00d9f5" />
                        </linearGradient>
                        <filter
                            id="glow6"
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                        >
                            <feGaussianBlur stdDeviation="6" result="b" />
                            <feMerge>
                                <feMergeNode in="b" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <rect width="800" height="600" fill="url(#g6)" />
                    {/* Gameloft-style winged lightning bolt */}
                    <g filter="url(#glow6)">
                        <polygon
                            points="430,210 380,330 420,330 370,420 470,300 430,300"
                            fill="rgba(255,255,255,.95)"
                        />
                        {/* wings */}
                        <path
                            d="M300 300 q60 -40 120 0 q-60 40 -120 0 Z"
                            fill="rgba(255,255,255,.85)"
                        />
                        <path
                            d="M500 300 q60 -40 120 0 q-60 40 -120 0 Z"
                            fill="rgba(255,255,255,.85)"
                        />
                    </g>
                </svg>
            )
        },
    },
    {
        id: 7,
        title: 'Echo Buds Pro',
        desc: 'True wireless earbuds with adaptive ANC and low‑latency gaming mode.',
        price: '$179',
        Svg: function EchoBudsSVG() {
            return (
                <svg
                    viewBox="0 0 800 600"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Echo Buds Pro — Treasure Chest"
                >
                    <defs>
                        <linearGradient id="g7" x1="0" x2="1">
                            <stop offset="0" stopColor="#f7971e" />
                            <stop offset="1" stopColor="#ffd200" />
                        </linearGradient>
                        <filter
                            id="glow7"
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                        >
                            <feGaussianBlur stdDeviation="5" result="b" />
                            <feMerge>
                                <feMergeNode in="b" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <rect width="800" height="600" fill="url(#g7)" />
                    {/* Gameloft-style treasure chest */}
                    <g filter="url(#glow7)">
                        <rect
                            x="280"
                            y="320"
                            width="240"
                            height="120"
                            rx="18"
                            fill="rgba(255,255,255,.92)"
                        />
                        <path
                            d="M280 320 Q400 240 520 320"
                            fill="rgba(255,255,255,.92)"
                        />
                        <rect
                            x="390"
                            y="360"
                            width="20"
                            height="40"
                            rx="6"
                            fill="rgba(0,0,0,.35)"
                        />
                        <circle
                            cx="400"
                            cy="380"
                            r="8"
                            fill="rgba(255,255,255,.95)"
                        />
                    </g>
                </svg>
            )
        },
    },
    {
        id: 8,
        title: 'Zen Mechanical Keyboard',
        desc: 'Hot‑swappable switches, RGB backlight, and ergonomic high‑profile case.',
        price: '$129',
        Svg: function ZenKeyboardSVG() {
            return (
                <svg
                    viewBox="0 0 800 600"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Zen Mechanical Keyboard — Shield Keycap"
                >
                    <defs>
                        <linearGradient id="g8" x1="0" x2="1">
                            <stop offset="0" stopColor="#8e9eab" />
                            <stop offset="1" stopColor="#eef2f3" />
                        </linearGradient>
                        <filter
                            id="glow8"
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                        >
                            <feGaussianBlur stdDeviation="5" result="b" />
                            <feMerge>
                                <feMergeNode in="b" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <rect width="800" height="600" fill="url(#g8)" />
                    {/* Gameloft-style shield with keycap emblem */}
                    <g filter="url(#glow8)">
                        <path
                            d="M400 190 L520 240 L500 360 Q400 430 300 360 L280 240 Z"
                            fill="rgba(255,255,255,.92)"
                        />
                        <rect
                            x="360"
                            y="280"
                            width="80"
                            height="50"
                            rx="10"
                            fill="rgba(0,0,0,.35)"
                        />
                        <rect
                            x="375"
                            y="292"
                            width="50"
                            height="26"
                            rx="6"
                            fill="rgba(255,255,255,.95)"
                        />
                    </g>
                </svg>
            )
        },
    },
    {
        id: 9,
        title: 'Glide Laptop Stand',
        desc: 'Aluminum stand with 7‑level tilt, cable pass‑through, and anti‑slip pads.',
        price: '$59',
        Svg: function GlideStandSVG() {
            return (
                <svg
                    viewBox="0 0 800 600"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Glide Laptop Stand — Gear Coin"
                >
                    <defs>
                        <linearGradient id="g9" x1="0" x2="1">
                            <stop offset="0" stopColor="#bdc3c7" />
                            <stop offset="1" stopColor="#2c3e50" />
                        </linearGradient>
                        <filter
                            id="glow9"
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                        >
                            <feGaussianBlur stdDeviation="6" result="b" />
                            <feMerge>
                                <feMergeNode in="b" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <rect width="800" height="600" fill="url(#g9)" />
                    {/* Gameloft-style gear coin */}
                    <g filter="url(#glow9)">
                        <circle
                            cx="400"
                            cy="300"
                            r="120"
                            fill="rgba(255,255,255,.92)"
                        />
                        {/* simple gear teeth */}
                        <g fill="rgba(0,0,0,.35)">
                            <rect
                                x="396"
                                y="170"
                                width="8"
                                height="30"
                                rx="4"
                            />
                            <rect
                                x="396"
                                y="400"
                                width="8"
                                height="30"
                                rx="4"
                            />
                            <rect
                                x="510"
                                y="296"
                                width="30"
                                height="8"
                                rx="4"
                            />
                            <rect
                                x="260"
                                y="296"
                                width="30"
                                height="8"
                                rx="4"
                            />
                            <rect
                                x="330"
                                y="195"
                                width="8"
                                height="30"
                                rx="4"
                                transform="rotate(-45 334 210)"
                            />
                            <rect
                                x="462"
                                y="375"
                                width="8"
                                height="30"
                                rx="4"
                                transform="rotate(-45 466 390)"
                            />
                            <rect
                                x="462"
                                y="195"
                                width="8"
                                height="30"
                                rx="4"
                                transform="rotate(45 466 210)"
                            />
                            <rect
                                x="330"
                                y="375"
                                width="8"
                                height="30"
                                rx="4"
                                transform="rotate(45 334 390)"
                            />
                        </g>
                        <circle
                            cx="400"
                            cy="300"
                            r="52"
                            fill="rgba(0,0,0,.35)"
                        />
                        <circle
                            cx="400"
                            cy="300"
                            r="24"
                            fill="rgba(255,255,255,.95)"
                        />
                    </g>
                </svg>
            )
        },
    },
]

export default function ProductCarousel() {
    const viewportRef = useRef<HTMLDivElement>(null)
    const [atStart, setAtStart] = useState(true)
    const [atEnd, setAtEnd] = useState(false)

    const page = () =>
        viewportRef.current ? viewportRef.current.clientWidth : 0

    const scrollNext = () => {
        const el = viewportRef.current
        if (!el) return
        const behavior = window.matchMedia('(prefers-reduced-motion: reduce)')
            .matches
            ? 'auto'
            : 'smooth'
        el.scrollBy({ left: page(), behavior })
    }

    const scrollPrev = () => {
        const el = viewportRef.current
        if (!el) return
        const behavior = window.matchMedia('(prefers-reduced-motion: reduce)')
            .matches
            ? 'auto'
            : 'smooth'
        el.scrollBy({ left: -page(), behavior })
    }

    const updateNavDisabled = () => {
        const el = viewportRef.current
        if (!el) return
        const maxScroll = el.scrollWidth - el.clientWidth - 1 // epsilon
        setAtStart(el.scrollLeft <= 0)
        setAtEnd(el.scrollLeft >= maxScroll)
    }

    useEffect(() => {
        const el = viewportRef.current
        if (!el) return

        updateNavDisabled()
        const onScroll = () => updateNavDisabled()
        el.addEventListener('scroll', onScroll, { passive: true })
        const onResize = () => updateNavDisabled()
        window.addEventListener('resize', onResize)

        return () => {
            el.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Featured Products</h1>
            <p className={styles.lead}>
                A fully responsive carousel showing <strong>1</strong> item on
                mobile, <strong>2</strong> on tablets (≥768px), and{' '}
                <strong>3</strong> on desktop (≥1024px).
            </p>

            <section
                className={styles.carousel}
                aria-roledescription="carousel"
                aria-label="Product Carousel"
            >
                <button
                    onClick={scrollPrev}
                    disabled={atStart}
                    aria-label="Previous products"
                    title="Previous"
                    className={`${styles.nav} ${styles.prev}`}
                >
                    <span aria-hidden="true">◀</span>
                </button>

                <div ref={viewportRef} className={styles.viewport} tabIndex={0}>
                    <ul className={styles.track}>
                        {products.map(
                            ({ id, title, desc, price, Svg }, idx) => (
                                <li
                                    key={id}
                                    className={styles.card}
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label={`${idx + 1} of ${products.length}`}
                                >
                                    <div className={styles.media}>
                                        <Svg />
                                    </div>
                                    <div className={styles.content}>
                                        <h3 className={styles.title}>
                                            {title}
                                        </h3>
                                        <p className={styles.desc}>{desc}</p>
                                    </div>
                                    <div className={styles.priceRow}>
                                        <span className={styles.price}>
                                            {price}
                                        </span>
                                        <button
                                            className={styles.btn}
                                            type="button"
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <button
                    onClick={scrollNext}
                    disabled={atEnd}
                    aria-label="Next products"
                    title="Next"
                    className={`${styles.nav} ${styles.next}`}
                >
                    <span aria-hidden="true">▶</span>
                </button>
            </section>
            <CartDrawerWithButton />
        </main>
    )
}
