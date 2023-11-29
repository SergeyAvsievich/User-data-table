import { Input, useDebounce } from "../../../shared"
import { ChangeEvent, useState } from "react"
import { InputDescriptionProps } from "./InputDescription.props"

export const InputDescription = ({setSearchQuery}: InputDescriptionProps) => {
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
            placeholder='Description'
            value={query}
            onChange={onChange} 
        />
    )
}