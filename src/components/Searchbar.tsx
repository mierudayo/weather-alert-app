import { FC, useContext } from 'react'
import Icon from './Icon'
import LocationInput from './LocationInput'
import { ContextLocation } from '../App'

type SearchbarProps = {
    handleClick: () => void
    handleKeyDownButton: (e: React.KeyboardEvent<HTMLButtonElement>) => void
    handleKeyDownInput: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const Searchbar: FC<SearchbarProps> = ({
    handleClick,
    handleKeyDownButton,
    handleKeyDownInput,
}) => {
    const contextLocation = useContext(ContextLocation)
    if (!contextLocation) {
        throw new Error(
            'ContextLocation must be used within a ContextLocation.Provider'
        )
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [location, _setLocation] = contextLocation

    return (
        <div className="flex flex-row p-2 gap-2 items-center m-auto">
            <Icon type="Flag" />
            <LocationInput handleKeyDown={handleKeyDownInput} />
            <button
                className="rounded-full p-2 bg-zinc-200 hover:disabled:cursor-not-allowed hover:enabled:bg-zinc-300 active:enabled:bg-zinc-400"
                title="Search"
                onClick={handleClick}
                onKeyDown={handleKeyDownButton}
                disabled={!location}
                aria-disabled={!location}
            >
                <Icon type="Search" />
            </button>
        </div>
    )
}

export default Searchbar
