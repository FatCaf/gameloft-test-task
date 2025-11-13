import { useCallback, useEffect } from 'react'

import { useForceUpdate } from './useForceUpdate'
import type { STORAGE_KEY } from '../constants/constants.ts'

type Update = (val: string | null) => string

export const useLocalStorage = (
    key: typeof STORAGE_KEY,
    initialValue: string
): [string, setValue: (update: Update) => void] => {
    const forceUpdate = useForceUpdate()

    const storedValue = localStorage.getItem(key)
    if (!storedValue) {
        localStorage.setItem(key, initialValue)
    }
    const value = storedValue ?? initialValue

    const setValue = useCallback(
        (update: Update) => {
            const currentValue = localStorage.getItem(key)
            const value = update(currentValue)

            if (value !== currentValue) {
                localStorage.setItem(key, value)
                forceUpdate()
            }
        },
        [key, forceUpdate]
    )

    useEffect(() => {
        window.addEventListener('storage', forceUpdate)
        return () => window.removeEventListener('storage', forceUpdate)
    }, [forceUpdate])

    return [value, setValue]
}
