import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
// dev-61wj3-dk.us.auth0.com
// 6fLqzEVWNeetmTCndIp8ZelgkEa8gLqR

ReactDOM.render(
    <Auth0Provider
        domain="dev-61wj3-dk.us.auth0.com"
        clientId="6fLqzEVWNeetmTCndIp8ZelgkEa8gLqR"
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>,
document.getElementById('root'))
