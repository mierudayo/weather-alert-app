import { useEffect } from 'react'

export const useAutoFocus = (
    location: String,
    inputRef: React.MutableRefObject<HTMLInputElement | null>
) => {
    useEffect(() => {
        if (!location.length && inputRef.current) inputRef.current?.focus()
    }, [inputRef, location])
}
