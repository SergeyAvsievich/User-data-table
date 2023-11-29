import { TableReducerState } from "../models/table-state.interface";

export const INITIAL_STATE: TableReducerState = {
  sort: {
      id: 'default',
      firstName: 'default',
      lastName: 'default'
  },
  countPages: 0,
  userData: []
}