import Button from '@mui/material/Button';
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function SignIn() {
    const navigate = useNavigate()
  return (
    <div>
        <Button 
         color='error'
         onClick={()=> navigate("/user/login")}
         >Sign in</Button>
    </div>
  )
}
