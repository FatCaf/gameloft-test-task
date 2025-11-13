import { useEffect, useRef, useState } from 'react'

export function useCarousel() {
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
        const maxScroll = el.scrollWidth - el.clientWidth - 1
        setAtStart(el.scrollLeft <= 0)
        setAtEnd(el.scrollLeft >= maxScroll)
    }

    useEffect(() => {
        const el = viewportRef.current
        if (!el) return

        updateNavDisabled()

        const onScroll = () => updateNavDisabled()
        el.addEventListener('scroll', onScroll, { passive: true })

        const onResize = () => {
            updateNavDisabled()
            if (el) {
                const currentPage = Math.round(el.scrollLeft / el.clientWidth)
                el.scrollTo({
                    left: currentPage * el.clientWidth,
                    behavior: 'auto',
                })
            }
        }
        window.addEventListener('resize', onResize)

        return () => {
            el.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return {
        viewportRef,
        scrollNext,
        scrollPrev,
        atStart,
        atEnd,
    }
}
