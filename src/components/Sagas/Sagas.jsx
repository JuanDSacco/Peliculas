import { Link } from "react-router-dom";


const Sagas = () => {

    return(
        <div style={{paddingTop:'200px',paddingBottom:'200px',fontSize:'40px'}}>
            <ul style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',listStyle:'none'}}>
                <div>
                <Link to={'/sagas/el-señor-de-los-anillos'}><li>El Señor de los Anillos</li></Link>
                </div>
                <div>
                <Link to={'/sagas/starwars'}><li>Star Wars</li></Link>
                </div>
                <div>
                <Link to={'/sagas/harrypotter'}><li>Harry Potter</li></Link>
                </div>
            </ul>
        </div>
    )
}

export default Sagas;