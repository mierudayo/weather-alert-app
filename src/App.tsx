import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from 'react'
import Canvas from './components/Canvas'

export const ContextErrorText = createContext<
    [string, Dispatch<SetStateAction<string>>] | undefined
>(undefined)

export const ContextLocation = createContext<
    [string, Dispatch<SetStateAction<string>>] | undefined
>(undefined)

const App = () => {
    const [location, setLocation] = useState(
        localStorage.getItem('weather-app-location') || ''
    )
    const [errorText, setErrorText] = useState('')

    useEffect(() => {
        const focusTrap = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return

            const focusableElements = Array.from(
                document.querySelectorAll('input, button')
            ) as HTMLElement[]

            const firstFocusableElement = focusableElements[0] as HTMLElement
            const lastFocusableElement = focusableElements[
                focusableElements.length - 1
            ] as HTMLElement

            const findIndex = (button: HTMLElement) => {
                return focusableElements.indexOf(button)
            }

            if (e.shiftKey && e.key === 'Tab') {
                if (document.activeElement === firstFocusableElement) {
                    e.preventDefault()
                    lastFocusableElement.focus()
                } else {
                    e.preventDefault()
                    const currentIndex = findIndex(
                        document.activeElement as HTMLElement
                    )
                    focusableElements[currentIndex - 1]?.focus()
                }
            } else if (e.key === 'Tab') {
                if (document.activeElement === lastFocusableElement) {
                    e.preventDefault()
                    firstFocusableElement.focus()
                } else {
                    e.preventDefault()
                    const currentIndex = findIndex(
                        document.activeElement as HTMLElement
                    )
                    focusableElements[currentIndex + 1]?.focus()
                }
            }
        }

        window.addEventListener('keydown', focusTrap)

        return () => window.removeEventListener('keydown', focusTrap)
    }, [])

    return (
        <ContextLocation.Provider value={[location, setLocation]}>
            <ContextErrorText.Provider value={[errorText, setErrorText]}>
                <main className="flex min-h-svh bg-gradient-to-b from-blue-950 to-blue-900 min-w-48">
                    <Canvas />
                </main>
            </ContextErrorText.Provider>
        </ContextLocation.Provider>
    )
}

export default App
