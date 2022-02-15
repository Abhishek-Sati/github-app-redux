import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import routes from "./routes"
import { Provider } from "react-redux"
import { store } from "./redux/store"


export default function App() {
    return (
        <section className='container'>
            <Provider store={store}>
                <Router>{renderRoutes(routes)}</Router>
            </Provider>
        </section>
    )
}
