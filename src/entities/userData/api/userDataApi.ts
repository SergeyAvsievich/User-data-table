import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IUserData } from '../..'

export const userDataApi = createApi({
    reducerPath: 'userDataApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://www.filltext.com'}),
    endpoints: (build) => ({
        getUserData: build.query<IUserData[], string>({
            query: () => ({
                url: '/',
                params: {
                    rows: 32,
                    id: '{number|1000}',
                    firstName: '{firstName}',
                    lastName: '{lastName}',
                    email: '{email}',
                    phone: '{phone|(xxx)xxx-xx-xx}',
                    address: '{addressObject}',
                    description: '{lorem|32}'
                }
            }) 
        })
    })
})

export const {useGetUserDataQuery} = userDataApi