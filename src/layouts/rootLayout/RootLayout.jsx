import {Link,Outlet} from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import './rootLayout.css'

const RootLayout = () => {
    return (
        <Auth0Provider
        domain="dev-nsk1j35e6f1s8gf6.us.auth0.com"
        clientId="REeiVRx0fZ3gKKpHNJ6pPrfI2xUs1dDP"
        authorizationParams={{
        redirect_uri: window.location.origin
        }}
        >
        <div className ="rootLayout">
            <header>
                <Link to="/" className="logo">
                    <img src="/logo.png"></img>
                    <span>Gemini AI</span>
                </Link>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
        </Auth0Provider>
    )
}
export default RootLayout
