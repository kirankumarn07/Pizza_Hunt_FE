import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { Customize } from './Customize';
import { ExtraVeggies } from './ExtraVeggies';
import { ExtraMeats } from './ExtraMeats';
import { data } from '../data';
import { useNavigate } from 'react-router-dom';

// const pizza = [
//   {
//     type: 'Pizza Base',
//     options: ['Brooklyn style', 'Handmade pan', 'Crunchy thin', 'Hand tossed', 'Gluten free']
//   },
//   {
//     type: 'Sauce',
//     options: ['White Garlic Sauce', 'Garlic Ranch Sauce', 'Hummus', 'Buffalo Sauce', 'Marinara Sauce']
//   },
//   {
//     type: 'Cheese type',
//     options: ['Mozzarella', 'Orange cheddar', 'Ghost pepper flavored', 'Creamy cheese']
//   },
//   {
//     type: 'Veggies',
//     options: ['Onion', 'Capsicum', 'Tomato', 'Red Pepper', 'Corn']
//   },
//   {
//     type: 'Meat',
//     options: ['Barbecue Chicken', 'Chicken Tikka', 'Tandoori Chicken', 'Peri-Peri Chicken', 'Chicken Sausage']
//   },
// ]

 const veggieTotal = (veggie)=>{
  let total = 0;
  if (veggie.length < 0) {
    total = 0;
  } else {
    veggie.forEach((d) => {
      total += d.quantity * data.veggies.veggiePrice;
    });
  }
  return total
 }

 const meatTotal = (meat)=>{
  let total = +0;
  if (meat.length < 0) {
    total = +0;
  } else {
    meat.forEach((d) => {
      total += d.quantity * data.meats.meatPrice;
    });
  }
  return total
 }



export function DialogBox() {

  const navigate = useNavigate();

  const [veggieData,setVeggieData]= useState([]);
  const [meatData,setMeatData]= useState([]);
  const [total,setTotal] = useState(0)
  // const finalPrice = initialPrice+0
  // console.log(cart);
  const veggiesDataArray = data.veggies.nameList;
  const meatsDataArray   = data.meats.nameList;

  const price = data.price

  useEffect(() => {
    setVeggieData(veggiesDataArray);
  }, [veggiesDataArray]);



  useEffect(() => {
    setMeatData(meatsDataArray);
  }, [meatsDataArray]);



  useEffect(()=>{
    setTotal(price+ veggieTotal(veggieData) + meatTotal(meatData));
  },[price,veggieData,meatData])
  


    const [open, setOpen] = useState(false);

  const handleVeggieQuantityBtn = (type,id) =>{
      let cartCopy = [...veggieData];
      const itemSelected = cartCopy.find((d) => d.id === id);
      if (type === 'add') {
        itemSelected.quantity += 1;
      }
      if (type === 'remove' && itemSelected.quantity > 0) {
        itemSelected.quantity -= 1;
      }
      
      setVeggieData(cartCopy)
      console.log(cartCopy);
    }

    const handleMeatQuantityBtn = (type,id) =>{
      let cartCopy = [...meatData];
      const itemSelected = cartCopy.find((d) => d.id === id);
      if (type === 'add') {
        itemSelected.quantity += 1;
      }
      if (type === 'remove' && itemSelected.quantity > 0) {
        itemSelected.quantity -= 1;
      }
      setMeatData(cartCopy);
      console.log(cartCopy);
    }
    

  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason !== 'backdropClick') {
        setOpen(false);
      }
    };
    
    
    const handleSubmit = ()=>{
      let options = {
        key: "rzp_test_Hiy7DeFeFrGd2G",
        key_secret:"Rd3GFtUzGk5KFr3gRwjOqa7M",
        amount: total *100,
        currency:"INR",
        name:"Pizza Hunt",
        description:"Best Pizzas in the Town",
        handler: ()=>{
          navigate("/");
          alert(`Order has been confirmed`);
          
        },
        prefill: {
          // email:"mvel1620r@gmail.com",
          contact:"0123456789"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }

  return(
    <div>
    <Button color='error' style={{marginLeft:'45%'}} onClick={handleClickOpen}>Customize your Pizza</Button>
    <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>

        <Customize/>
        <ExtraVeggies handleVeggie ={handleVeggieQuantityBtn} veggieData={veggieData}/>
        <ExtraMeats handleMeat ={handleMeatQuantityBtn} meatData={meatData}/>
        <DialogActions>
        <Button color='error' variant="contained" onClick={handleClose}>Cancel</Button>
        <Button color='success' variant="contained" onClick={handleSubmit}>Checkout -(₹{total}) </Button>
      </DialogActions>
    </Dialog>
    
  </div>
  )  
}


