import { Formik, Form, Field } from "formik";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { API } from "../API";
import { useState } from "react";
// import { TextField } from '@mui/material/TextField';

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Invalid email address or Password Pattern";
  } else if (
    !/^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$/g.test(
      value
    )
  ) {
    error = "Invalid email address or Password Pattern";
  }
  return error;
}

function validatePassword(value) {
  let error;
  if (!value) {
    error = "Invalid email address or Password Pattern";
  } else if (
    !/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/g.test(
      value
    )
  ) {
    error = "Invalid email address or Password Pattern";
  }
  return error;
}

export function InputValidate() {
  const navigate = useNavigate();
  const [status,setStatus] = useState("")
  // const [password,setPassword] = useState("");
  // console.log(process.env.TOKEN);
  return (
    <div>
      <div>
        <h2 style={{ textAlign: "center",margin: "20% 35%",marginTop: "10%" }}>User SignUp</h2>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          // same shape as initial values
          fetch(`${API}/users/signup`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-Type": "application/json" },
          })
            .then((data) => data.json())
            .then((response) => {

              if(response.message){
              setStatus(response.message)
              console.log(response.message)
              // return navigate("/user/login");
              }

              else if(response.error){
                setStatus(response.error)
                console.log(response.error)
              }

            })
            .then((response) => {
              if(response === 'acknowledged'){
                navigate("/user/login")
                console.log(response)
              }
            });
          // console.log(values);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form className="login">
            <Field
              name="email"
              placeholder="Create new E-mail "
              validate={validateEmail}
            />

            {errors.email && touched.email && (
              <div style={{ color: "red" }}>{errors.email}</div>
            )}
            

            <Field
              name="password"
              placeholder="Create new password"
              validate={validatePassword}
            />

            {errors.password && touched.password && (
              <div style={{ color: "red" }}>{errors.password}</div>
            )}
            

            <Button
              style={{minHeight:'1px'}}
              variant="contained"
              color="primary"
              type="submit"
              //  onClick={()=> {
              //     const newUser = {
              //         email: 'mail',
              //         password: 'password'
              //     };
              //     fetch(`${API}/users/signup`,{
              //         method : "POST",
              //         body   : JSON.stringify(newUser),
              //         headers: {"Content-Type" : "application/json"}
              //     }).then((data)=>data.json())
              //       .then(()=> navigate("/user/login"))
              //     }}
            >
              Sign Up
            </Button>
            <h1>{status}</h1>
          </Form>
        )}
      </Formik>
    </div>
  );
}