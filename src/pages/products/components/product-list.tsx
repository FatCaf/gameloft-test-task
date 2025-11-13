import products from '../../../products/products.tsx'
import styles from '../ProductCarousel.module.css'
import { ProductItem } from './product-item.tsx'
import { useCart } from '../../../hooks/useCart.ts'

export const ProductList = () => {
    const { addToCart } = useCart()

    return (
        <ul className={styles.track}>
            {products.map(({ id, title, desc, price, img }, idx) => (
                <ProductItem
                    key={title}
                    id={id}
                    title={title}
                    price={price}
                    description={desc}
                    img={img}
                    handleAddToCart={addToCart}
                    idx={idx}
                />
            ))}
        </ul>
    )
}
