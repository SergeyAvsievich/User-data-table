import {configureStore} from '@reduxjs/toolkit'
import { userDataApi } from '../../entities'

export const store = configureStore({
    reducer: {
        [userDataApi.reducerPath]: userDataApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userDataApi.middleware) 
    
})