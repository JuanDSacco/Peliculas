import { Link } from "react-router-dom";

const NavBar = () => {
    return(
            <nav>
                <ul style={{display:'flex',flexDirection:'row',listStyle:'none',justifyContent:'space-evenly',paddingBottom:'50px'}}>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/peliculas'}><li>Peliculas</li></Link>
                    <Link to={'/sagas'}><li>Sagas</li></Link>
                    <Link to={'/nosotros'}><li>Nosotros</li></Link>
                </ul>
            </nav>          
    )
} 

export default NavBar;