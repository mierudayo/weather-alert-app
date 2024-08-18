import { useEffect, useState } from 'react'

export const useScreenWidth = ():
    | 'MOBILE'
    | 'MOBILE_LANDSCAPE'
    | 'TABLET_SMALL'
    | 'TABLET_SMALL_LANDSCAPE'
    | 'TABLET'
    | 'TABLET_LANDSCAPE'
    | 'DESKTOP' => {
    const [screenWidth, setScreenWidth] = useState<
        | 'MOBILE'
        | 'MOBILE_LANDSCAPE'
        | 'TABLET_SMALL'
        | 'TABLET_SMALL_LANDSCAPE'
        | 'TABLET'
        | 'TABLET_LANDSCAPE'
        | 'DESKTOP'
    >('MOBILE')

    useEffect(() => {
        const handleScreenWidth = () => {
            if (window.innerWidth < 384) {
                if (window.innerHeight < window.innerWidth)
                    setScreenWidth('MOBILE_LANDSCAPE')
                else setScreenWidth('MOBILE')
            } else if (window.innerWidth < 640) {
                if (window.innerHeight < window.innerWidth)
                    setScreenWidth('TABLET_SMALL_LANDSCAPE')
                else setScreenWidth('TABLET_SMALL')
            } else if (window.innerWidth < 1024) {
                if (window.innerHeight < window.innerWidth)
                    setScreenWidth('TABLET_LANDSCAPE')
                else setScreenWidth('TABLET')
            } else setScreenWidth('DESKTOP')
        }
        window.addEventListener('resize', handleScreenWidth)
        handleScreenWidth()

        return () => {
            window.removeEventListener('resize', handleScreenWidth)
        }
    }, [])

    return screenWidth
}
