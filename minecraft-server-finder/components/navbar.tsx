
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

        <div className="collapse navbar-collapse" id="navbar">
            <div className="navbar-nav">
                <a className="nav-item nav-link" id="home" href="home.html">Home</a>
                <a className="nav-item nav-link" id="jogador" href="jogador.html">Jogador</a>
                <a className="nav-item nav-link" id="lista" href="lista.html">Lista</a>
            </div>
        </div>
    </nav>
    )
}