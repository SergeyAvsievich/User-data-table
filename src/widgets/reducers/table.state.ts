import { SortEnum } from "../../features"
import { INITIAL_STATE } from "../constants/table-state.constant"
import { TableReducerState, TableActions } from "../models/table-state.interface"

export const tableReducer = (state: TableReducerState, action: TableActions): TableReducerState => {
    switch(action.type) {
        case SortEnum.Init:
            return {
                sort: {...state.sort, id: 'asc'},
                userData: action.payload.toSorted((a, b) => a.id > b.id ? 1 : -1),
                countPages: state.countPages
            }
        case SortEnum.DescId:
            return {
                sort: {...INITIAL_STATE.sort, id: 'asc'},
                userData: state.userData.toSorted((a, b) => a.id > b.id ? 1 : -1),
                countPages: state.countPages
            }
        case SortEnum.AscId:
            return {
                sort: {...INITIAL_STATE.sort, id: 'desc'},
                userData: state.userData.toSorted((a, b) => a.id < b.id ? 1 : -1),
                countPages: state.countPages
            }
        case SortEnum.DescFirstName:
            return {
                sort: {...INITIAL_STATE.sort, firstName: 'asc'},
                userData: state.userData.toSorted((a, b) => a.firstName > b.firstName ? 1 : -1),
                countPages: state.countPages
            }
        case SortEnum.AscFirstName:
            return {
                sort: {...INITIAL_STATE.sort, firstName: 'desc'},
                userData: state.userData.toSorted((a, b) => a.firstName < b.firstName ? 1 : -1),
                countPages: state.countPages
            }
        case SortEnum.DescLastName:
            return {
                sort: {...INITIAL_STATE.sort, lastName: 'asc'},
                userData: state.userData.toSorted((a, b) => a.lastName > b.lastName ? 1 : -1),
                countPages: state.countPages
            }
        case SortEnum.AscLastName:
            return {
                sort: {...INITIAL_STATE.sort, lastName: 'desc'},
                userData: state.userData.toSorted((a, b) => a.lastName < b.lastName ? 1 : -1),
                countPages: state.countPages
            }
        case 'FILTER':
            return {
                sort: state.sort,
                userData: state.userData
                    .filter(el => {
                        return el.id.toString().includes(action.payload.id.toString()) 
                            && el.firstName.toLowerCase().includes(action.payload.firstName.toLowerCase())
                            && el.lastName.toLowerCase().includes(action.payload.lastName.toLowerCase())
                            && el.email.toLowerCase().includes(action.payload.email.toLowerCase())
                            && el.phone.toLowerCase().includes(action.payload.phone.toLowerCase())
                            && el.address.streetAddress.toLowerCase().includes(action.payload.address.streetAddress.toLowerCase())
                            && el.description.toLowerCase().includes(action.payload.description.toLowerCase())
                    }),
                countPages: state.countPages
            }
        case 'SET_COUNT_PAGES':
            return {
                ...state,
                countPages: Math.ceil(state.userData.length / 5)
            }
        default:
            throw new Error('Неверный тип сортировки')
    }

}