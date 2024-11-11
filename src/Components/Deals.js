import { DialogBox } from "./DialogBox"
import { data } from "../data";


export function Deals(){

    const price = data.price;

 return(
    <div className="deals-container">
    <div className="deals">
        <h1>{data.name} : Personal Pizzas starting at Rs {price}</h1>
        <img src="https://i.pinimg.com/236x/a4/20/ca/a420ca5cabb4357cd6c112aff0330e81.jpg" alt="Pizza-Pic"/>
    </div>
     <DialogBox/>
    </div>
)}