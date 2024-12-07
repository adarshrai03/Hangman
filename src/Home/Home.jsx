import Startgame from "../assets/Homepage/startgame.png"
import "./Home.css";
import { Link } from "react-router-dom";
import Logo from "../assets/Homepage/Logo.png"

function Home(){
    return(

        <div className="Homepage">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="button">
            <Link to="/start"> <img src={Startgame} alt="Start Game"/> </Link>
            </div>
        </div>
    )
}
export default Home;