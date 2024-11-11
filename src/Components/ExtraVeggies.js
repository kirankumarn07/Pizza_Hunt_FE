import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { data } from '../data';

export  function ExtraVeggies({handleVeggie=()=>{},veggieData}) {
    
  return (
    <>
       <DialogTitle>Extra Veggies-(₹{data.veggies.veggiePrice})</DialogTitle>
       <DialogContent>
        {veggieData.map((name)=> <VeggieList listName={name.name} id ={name.id} key = {name.id} price ={data.veggies.veggiePrice} handleVeggie={handleVeggie} quantity={name.quantity}/>)}
        </DialogContent>
    </>
  )
}

function VeggieList({listName,price,handleVeggie=()=>{},id,quantity}){

    const value = quantity*price;

    return(
        <div className='add-btn'>
        <p>{listName}(+₹{value})</p>
        <div>
        <button onClick={()=>handleVeggie("remove",id)}>-</button>
         <p style={{padding : "2px"}}>{quantity}</p>
        <button onClick={()=>handleVeggie("add",id)}>+</button>
        </div>  
     </div>
    )
  }
