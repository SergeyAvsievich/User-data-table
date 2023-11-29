import { IUserData } from "../../entities"
import { SortEnum } from "../../features"


export type TableActions = 
    | {type: SortEnum.Init, payload: IUserData[]}
    | {type: SortEnum.DescId} 
    | {type: SortEnum.AscId} 
    | {type: SortEnum.DescFirstName} 
    | {type: SortEnum.AscFirstName} 
    | {type: SortEnum.DescLastName} 
    | {type: SortEnum.AscLastName}
    | {type: 'FILTER', payload: IUserData}
    | {type: 'SET_COUNT_PAGES'};


export type TypeSort = 'default' | 'desc' | 'asc'

export interface TableReducerState {
    sort: Record<'id' | 'firstName' | 'lastName', TypeSort>
    userData: IUserData[]
    countPages: number
}