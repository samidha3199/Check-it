import { LOGO_URL } from "../utils/constants"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// Header Component

const Header = () =>{

    // Local State variable
    const [btnNameReact, setbtnNameReact] = useState("Login")

    useEffect(()=>{
        console.log("Use Effect Called!")
    },[btnNameReact])

    return(
        <>
            <nav>
                <div className="container nav__container">
                    <a className="nav__logo"><img src={LOGO_URL} /></a>
                    <ul className="nav__items">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li><a><span><i class="uil uil-shopping-cart-alt"></i></span> Cart</a></li>
                        <li>
                            <button onClick={()=>{
                                btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login")
                            }} className="button">
                            {btnNameReact}</button>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header