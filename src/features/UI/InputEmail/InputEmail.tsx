import { Input, useDebounce } from "../../../shared"
import { ChangeEvent, useState } from "react"
import { InputEmailProps } from "./InputEmail.props"

export const InputEmail = ({setSearchQuery}: InputEmailProps) => {
    const [query, setQuery] = useState<string>('')

    const makeRequest = useDebounce(() => {
        setSearchQuery(query)
      }, 500)
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        makeRequest(val)
        setQuery(val)
    }

    return (
        <Input 
            placeholder='Email'
            value={query}
            onChange={onChange} 
        />
    )
}