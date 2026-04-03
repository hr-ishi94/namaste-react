import { LOGO } from "../utils/constants"

const Header = () => {
  return (
    <div className="header-section">
           <img className="header-logo" src={LOGO} alt="" />     
           <div className="nav-row">
            <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>News</li>
                <li>About</li>
            </ul>
           </div>
    </div>
  )
}

export default Header
