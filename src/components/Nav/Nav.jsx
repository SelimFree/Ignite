import "./Nav.scss"
import logo from "../../assets/logo.svg"
function Nav() {
  return (
    <div className="Nav">
        <div className="logo">
            <img src={logo} />
            <h1>Ignite</h1>
        </div>
        <div className="search">
            <input type="text" />
            <button>Search</button>
        </div>
    </div>
  )
}

export default Nav