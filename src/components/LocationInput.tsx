import { FC, useContext, useEffect, useRef } from 'react'
import './locationInput.css'
import { ContextLocation } from '../App'

type LocationInputProps = {
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const LocationInput: FC<LocationInputProps> = ({ handleKeyDown }) => {
    const contextLocation = useContext(ContextLocation)
    if (!contextLocation) {
        throw new Error(
            'ContextLocation must be used" within a ContextLocation.Provider'
        )
    }
    const [location, setLocation] = contextLocation

    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (!location.length && inputRef.current) inputRef.current?.focus()
    }, [inputRef, location])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value)
    }

    return (
        <input
            type="search"
            placeholder="Enter your Location."
            className="px-2 py-1 bg-zinc-200 rounded-md hover:bg-zinc-300 text-base lg:text-lg w-24 min-[320px]:w-full"
            autoComplete="country-name"
            title="Enter your Location."
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={location}
            ref={inputRef}
        />
    )
}

export default LocationInput
