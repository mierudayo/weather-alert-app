import { FC } from 'react'

type CenteredTextProps = {
    content: number
    text: string
    unit: string
}

const CenteredText: FC<CenteredTextProps> = ({ content, text, unit }) => {
    return (
        <div className="text-sm min-[320px]:text-base lg:text-lg text-center">
            {text} {content}
            {unit}
        </div>
    )
}

export default CenteredText
