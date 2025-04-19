import { FC } from 'react'

type TemperatureTextProps = {
    id?: string
    content: number
}

const TemperatureText: FC<TemperatureTextProps> = ({ id, content }) => {
    return (
        <span className="text-lg lg:text-2xl font-bold">
            {id ? <span id={id}>{content}</span> : content}
            <span className="font-mono">°</span>C
        </span>
    )
}

export default TemperatureText
