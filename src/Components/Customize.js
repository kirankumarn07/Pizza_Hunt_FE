import { useState } from 'react';
import Box from '@mui/material/Box';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { data } from '../data';



export function Customize() {
    const [base, setBase] = useState('');
    const [sauce, setSauce] = useState('');
    const [cheese, setCheese] = useState('');
    const [veggie1, setVeggie1] = useState('');
    const [veggie2, setVeggie2] = useState('');
    const [veggie3, setVeggie3] = useState('');
    const [meat, setMeat] = useState('');
  
    const baseHandleChange = (event) => {
      setBase(String(event.target.value) || '');
    };

    const sauceHandleChange = (event) => {
      setSauce(String(event.target.value) || '');
    };
    
    const cheeseHandleChange = (event) => {
      setCheese(String(event.target.value) || '');
    };

    const veggie1HandleChange = (event) => {
      setVeggie1(String(event.target.value) || '');
    };

    const veggie2HandleChange = (event) => {
      setVeggie2(String(event.target.value) || '');
    };

    const veggie3HandleChange = (event) => {
      setVeggie3(String(event.target.value) || '');
    };

    const meatHandleChange = (event) => {
      setMeat(String(event.target.value) || '');
    };              

  return(
    <>
      <DialogTitle>Customize</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-dialog-select-label">Pizza Base</InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={base}
              onChange={baseHandleChange}
              input={<OutlinedInput label="Pizza Base" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {data.bases.map((base, index)=><MenuItem value={base} key={index}>{base}</MenuItem>)}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-dialog-select-label">Sauce</InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={sauce}
              onChange={sauceHandleChange}
              input={<OutlinedInput label="Sauce" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {data.sauces.map((sauce, index)=><MenuItem value={sauce} key={index}>{sauce}</MenuItem>)}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-dialog-select-label">Cheese</InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={cheese}
              onChange={cheeseHandleChange}
              input={<OutlinedInput label="Cheese" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {data.cheeses.map((cheese, index)=><MenuItem value={cheese} key={index}>{cheese}</MenuItem>)}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-dialog-select-label">Veggie-1</InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={veggie1}
              onChange={veggie1HandleChange}
              input={<OutlinedInput label="Veggie-1" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {data.veggies.nameList.map((veggie, index)=><MenuItem value={veggie.name} key={index}>{veggie.name}</MenuItem>)}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-dialog-select-label">Veggie-2</InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={veggie2}
              onChange={veggie2HandleChange}
              input={<OutlinedInput label="Veggie-2" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {data.veggies.nameList.map((veggie, index)=><MenuItem value={veggie.name} key={index}>{veggie.name}</MenuItem>)}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-dialog-select-label">Veggie-3</InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={veggie3}
              onChange={veggie3HandleChange}
              input={<OutlinedInput label="Veggie-3" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {data.veggies.nameList.map((veggie, index)=><MenuItem value={veggie.name} key={index}>{veggie.name}</MenuItem>)}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-dialog-select-label">Meat</InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              value={meat}
              onChange={meatHandleChange}
              input={<OutlinedInput label="Meat" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {data.meats.nameList.map((meat, index)=><MenuItem value={meat.name} key={index}>{meat.name}</MenuItem>)}
            </Select>
          </FormControl>                                        
          
        
        </Box>
      </DialogContent>
        
  </>
  )  
}