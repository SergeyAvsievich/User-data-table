import { Input, useDebounce } from "../../../shared"
import { ChangeEvent, useState } from "react"
import { InputLastNameProps } from "./InputLastName.props"

export const InputLastName = ({setSearchQuery}: InputLastNameProps) => {
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
            placeholder='Last name'
            value={query}
            onChange={onChange} 
        />
    )
}