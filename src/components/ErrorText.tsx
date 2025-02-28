import { useContext } from 'react'
import { ContextErrorText } from '../App'
import Icon from './Icon'

const ErrorText = () => {
    const contextErrorText = useContext(ContextErrorText)
    if (!contextErrorText) {
        throw new Error(
            'ContextErrorText must be used within a ContextErrorText.Provider'
        )
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [errorText, _setErrorText] = contextErrorText

    return (
        <div className="flex flex-col p-2 gap-y-2" data-testid="error-content">
            <div className="flex flex-row justify-center gap-x-4">
                <Icon type={'Error'} />
                <Icon type={'404'} />
            </div>
            <div className="text-base lg:text-lg text-center overflow-hidden">
                {errorText}
            </div>
        </div>
    )
}

export default ErrorText
