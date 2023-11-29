import { ReactNode } from "react"

export interface IDataSource {
    key: number | string
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    description: ReactNode
}