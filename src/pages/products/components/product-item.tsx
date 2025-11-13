import styles from '../ProductCarousel.module.css'
import products from '../../../products/products.tsx'
import { formatCurrency } from '../../../utils'
import type { Product } from '../../../types'

type Props = Product & {
    handleAddToCart: (id: number) => void
    idx: number
}

export const ProductItem = ({
    id,
    title,
    img,
    price,
    idx,
    description,
    handleAddToCart,
}: Props) => {
    return (
        <li
            key={id}
            className={styles.card}
            role="group"
            aria-roledescription="slide"
            aria-label={`${idx + 1} of ${products.length}`}
        >
            <div className={styles.media}>
                <img src={img} alt={title} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.desc}>{description}</p>
            </div>
            <div className={styles.priceRow}>
                <span className={styles.price}>{formatCurrency(price)}</span>
                <button
                    onClick={() => handleAddToCart(id)}
                    className={styles.btn}
                    type="button"
                >
                    Add to cart
                </button>
            </div>
        </li>
    )
}
