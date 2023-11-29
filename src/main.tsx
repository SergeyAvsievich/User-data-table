import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import {Provider} from 'react-redux'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { store } from './app/redux'
import {Main} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/menu',
    element: <Main />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
