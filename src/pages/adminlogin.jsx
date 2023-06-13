import React from 'react';
import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {Link} from 'react-router-dom'; 

import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
  import 'mdb-react-ui-kit/dist/css/mdb.min.css';


const AdminLogin=()=>{
  const [adminname, setAdminname] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 
 
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/adminlogin", {
            adminname: adminname,
            password: password,
            }).then((res) =>
            {
             console.log(res.data);
            
             if (res.data.message === "Username not exits")
             {
               alert("Username not exits");
             }
             else if(res.data.message === "Login Success")
             {
                
                navigate('/delete');
             }
              else
             {
                alert("Incorrect Username and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
 
         catch (err) {
          alert(err);
        }
      
      }
  
return(
    

<div className='login-container '>

<div className="abgimg">
     

     <div className="app" >
       <div className="login-form">
         <div className="title">Login</div>
         <div className="form">
       <form id="forl">
         <div className="input-container">
           
           <input type="text" placeholder="Username" id='fan' name="uname"  value={adminname}
           onChange={(event) => {
             setAdminname(event.target.value);
           }} required />
           
         </div><br></br>
         <div className="input-container">
           <input type="password" placeholder="Password" id='fan' name="pass"  value={password}
             onChange={(event) => {
               setPassword(event.target.value);
             }} required />
           
         </div>
         <div>
         
         <button id="sam" class="btn btn-primary" onClick={login} >Login</button>
         </div><br></br>
         <div></div><br></br>
         <div>To create new account - 
         <Link to="/adminsignup">Signup</Link>
         </div>
        
       </form>
     </div>
     
     
     </div> 
       </div>
 </div>
 


    
    </div>
    

)
}
export default AdminLogin;