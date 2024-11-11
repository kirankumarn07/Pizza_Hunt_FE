// import './App.css';

import { SignIn } from "../Components/SignIn";

const logoPic   = "https://i.pinimg.com/236x/c6/69/54/c669549285684730e31b30b36556bc03.jpg";
const logoName  = "https://fontmeme.com/permalink/230213/4ac1d313d2b06b0dc3355b825ab46c0b.png";
const logoImage = "https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-md.22dee481bc08406f32b55c3db87ca7fa.jpg";

export function Home() {
  return (
    <div>
        <div className="nav">
          <div>
         <img className="logo-pic" src={logoPic} alt="logo"/>
         <img className="logo-name" src={logoName} alt="logo"/>           
          </div>
         <SignIn/>
         </div>
        <img className="home-image" src={logoImage} alt="Valentine's Day Special"/>
    </div>
  )
}
