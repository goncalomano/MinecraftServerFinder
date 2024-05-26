"use client"

import { ServerListProvider } from "./list/ServerListProviders"

export const NavBar = () => {
    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

            <div className="navbar-nav">
                <a className="nav-item nav-link" id="home" href="/">Home</a>
                <a className="nav-item nav-link" id="jogador" href="jogador.html">Jogador</a>
                <a className="nav-item nav-link" id="lista" href="/list">Lista</a>
            </div>
    </nav>

    )
}