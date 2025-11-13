import styles from '../ProductCarousel.module.css'
import { useCarousel } from '../../../hooks/useCarousel.ts'
type Props = {
    children: React.ReactNode
}

export const Carousel = ({ children }: Props) => {
    const { viewportRef, scrollNext, scrollPrev, atStart, atEnd } =
        useCarousel()
    return (
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
                {children}
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
    )
}
