import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { data } from '../data';

export  function ExtraMeats({handleMeat=()=>{},meatData}) {
    

  return (
    <>
       <DialogTitle>Extra Meats-(₹{data.meats.meatPrice})</DialogTitle>
       <DialogContent>
        {meatData.map((name)=> <MeatList listName ={name.name} id={name.id} key ={name.id} price ={data.meats.meatPrice} quantity={name.quantity} handleMeat={handleMeat}/>)}
        </DialogContent>
    </>
  )
}


function MeatList({listName,price,id,quantity,handleMeat=()=> {}}){

    const value = quantity*price;

    return(
        <div className='add-btn'>
        <p>{listName}(+₹{value})</p>
        <div>
        <button onClick={()=>handleMeat("remove",id)}>-</button>
         <p style={{padding : "2px"}}>{quantity}</p>
        <button onClick={()=>handleMeat("add",id)}>+</button>
        </div>  
     </div>
    )
  }