import { Input, useDebounce } from "../../../shared"
import { ChangeEvent, useState } from "react"
import { InputAddressProps } from "./InputAddress.props"

export const InputAddress = ({setSearchQuery}: InputAddressProps) => {
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
            placeholder='Address'
            value={query}
            onChange={onChange} 
        />
    )
}