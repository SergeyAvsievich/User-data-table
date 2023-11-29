import { ReactNode } from "react"

export interface IData {
    id: number | string
    key: string | number
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    description: ReactNode
}