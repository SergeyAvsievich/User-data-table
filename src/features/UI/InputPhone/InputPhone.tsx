import { Input, useDebounce } from "../../../shared"
import { ChangeEvent, useState } from "react"
import { InputPhoneProps } from "./InputPhone.props"

export const InputPhone = ({setSearchQuery}: InputPhoneProps) => {
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
            placeholder='Phone'
            value={query}
            onChange={onChange} 
        />
    )
}