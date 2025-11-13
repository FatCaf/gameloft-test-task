import {
    buds,
    desktopStand,
    drone,
    headphones,
    keyboard,
    lamp,
    smartBand,
    speaker,
    smartWatch,
} from '../assets/images.ts'

const products = [
    {
        id: 1,
        title: 'Aurora Smartwatch',
        desc: 'Track health metrics, receive notifications, and enjoy a 7‑day battery life in a sleek form factor.',
        price: 199,
        img: smartWatch,
    },
    {
        id: 2,
        title: 'Nimbus Headphones',
        desc: 'Immersive noise‑cancellation with studio‑grade sound and ultra‑soft memory‑foam cushions.',
        price: 149,
        img: headphones,
    },
    {
        id: 3,
        title: 'Solace Speaker',
        desc: 'Room‑filling 360° audio in a compact body. Hands‑free voice control and multi‑room pairing.',
        price: 129,
        img: speaker,
    },
    {
        id: 4,
        title: 'Lumen Desk Lamp',
        desc: 'Adjustable LED lamp with ambient glow and three color temperatures for focused work.',
        price: 89,
        img: lamp,
    },
    {
        id: 5,
        title: 'Pulse Fitness Band',
        desc: 'Heart‑rate tracking, sleep analysis, and 5‑ATM water resistance in a slim band.',
        price: 99,
        img: smartBand,
    },
    {
        id: 6,
        title: 'Vortex Drone',
        desc: 'Compact 4K camera drone with obstacle sensing and 28‑minute flight time.',
        price: 299,
        img: drone,
    },
    {
        id: 7,
        title: 'Echo Buds Pro',
        desc: 'True wireless earbuds with adaptive ANC and low‑latency gaming mode.',
        price: 179,
        img: buds,
    },
    {
        id: 8,
        title: 'Zen Mechanical Keyboard',
        desc: 'Hot‑swappable switches, RGB backlight, and ergonomic high‑profile case.',
        price: 129,
        img: keyboard,
    },
    {
        id: 9,
        title: 'Glide Laptop Stand',
        desc: 'Aluminum stand with 7‑level tilt, cable pass‑through, and anti‑slip pads.',
        price: 59,
        img: desktopStand,
    },
]

export default products
