import { Input } from "../../../shared"
import { ChangeEvent, useState } from "react"
import { InputIdProps } from "./InputId.props"

export const InputId = ({setSearchQuery}: InputIdProps) => {
    const [query, setQuery] = useState<number | string>()  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setQuery(val)
        setSearchQuery(val)
    }

    return (
        <Input type="number"
            placeholder='Id'
            min={1}
            max={1000} 
            value={query}
            onChange={onChange}
        />
    )
}