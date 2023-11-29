import { TableReducerState } from "..";

export const INITIAL_STATE: TableReducerState = {
  sort: {
      id: 'default',
      firstName: 'default',
      lastName: 'default'
  },
  countPages: 0,
  userData: []
}