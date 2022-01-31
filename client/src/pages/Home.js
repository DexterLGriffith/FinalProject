import load from "../art/LiftRite.gif";
import "./home.css"

export function SplashScreen() {

    return (
        <div className="splashScreen">
        <img src={load} alt="LiftRite" style={{background: "blue", width: '600px', height: '600px'}}/>
        </div>
        )
}


export default SplashScreen; 
