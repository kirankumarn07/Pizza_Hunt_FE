



const logoPic   = "https://i.pinimg.com/236x/c6/69/54/c669549285684730e31b30b36556bc03.jpg";
const logoName  = "https://fontmeme.com/permalink/230213/4ac1d313d2b06b0dc3355b825ab46c0b.png";
const logoImage = "https://www.pizzahut.co.in/order/images/backgrounds/in/en-IN/home-bg-lg.d40938ca2931a40b2624ebc4582f8eb0.jpg"


export function NavBar() {

  


  return(
    <div>
    <div className="nav">
    <div>
   <img className="logo-pic" src={logoPic} alt="logo"/>
   <img className="logo-name" src={logoName} alt="logo"/>           
    </div>
   </div>
   <img className="home-image" src={logoImage} alt="Valentine's Day Special"/>
   <br/>
       {/* <Basket/> */}
   </div>
  )
}
