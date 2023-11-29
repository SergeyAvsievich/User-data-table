import { Input, useDebounce } from "../../../shared"
import { ChangeEvent, useState } from "react"
import { InputFirstNameProps } from "./InputFirstName.props"

export const InputFirstName = ({setSearchQuery}: InputFirstNameProps) => {
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
            placeholder='First name' 
            onChange={onChange}
            value={query}
        />
    )
}