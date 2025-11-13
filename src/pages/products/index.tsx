import styles from './ProductCarousel.module.css'
import { Cart } from '../../components/cart'
import { Carousel } from './components/carousel.tsx'
import { ProductList } from './components/product-list.tsx'
import { CartProvider } from '../../context/cart/provider.tsx'

export default function ProductCarousel() {
    return (
        <main className={styles.main}>
            <h1 className={styles.h1}>Featured Products</h1>

            <CartProvider>
                <Carousel>
                    <ProductList />
                </Carousel>

                <Cart />
            </CartProvider>
        </main>
    )
}
