import React from 'react';
import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

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



const AdminSignup=()=>{
 
  const [adminname, setAdminname] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [password, setPassword] = useState("");
  const [majorstream, setMajorstream] = useState("");
  
  const [experience, setExperience] = useState("");
  const navigate=useNavigate();
 


  async function save(event) {
      event.preventDefault();
      if(adminname===""||email===""||mobileno===""||password===""||majorstream===""||experience==="")
      {
        alert("Please fill all the details")
      }
      else{
      try {
        await axios.post("http://localhost:8080/adminsave", {
    
        adminname: adminname,
        email: email,
        mobileno:mobileno,
        password: password,
        majorstream:majorstream,
     
        experience:experience
    

        });
        alert("Admin Registation Successfull");
        navigate("/adminlogin")

      } catch (err) {
        alert(err);
      }
    }
    }

  
return(
    

<div className='adminsignbg'>
<Link to="/adminlogin" id='kr'><ArrowBackIcon /></Link>
<div className='asignup-container1 '>




    <MDBContainer fluid  className="p-3 my-5">

      <MDBRow>

       

        <MDBCol col='2' md='6'>

      
        
          <MDBInput wrapperClass='mb-4' label='Adminname' id='aib' type='text' size="lg"  value={adminname}
          onChange={(event) => {
            setAdminname(event.target.value);
          }}
         
          required/>
        

          <MDBInput wrapperClass='mb-4' label='Email address' id='aib' type='email' size="lg"   value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
         
          required/>
            <MDBInput wrapperClass='mb-4' label='Mobile number' id='aib' type='text' size="lg" 
            
            value={mobileno}
            onChange={(event) => {
              setMobileno(event.target.value);
            }}
            required />
          <MDBInput wrapperClass='mb-4' label='Password' id='aib' type='password' size="lg"   
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required />
           <MDBInput wrapperClass='mb-4' label='Major stream' id='aib' type='text' size="lg" 
            value={majorstream}
            onChange={(event) => {
              setMajorstream(event.target.value);
            }}
            required/>
         
           <MDBInput wrapperClass='mb-4' label='Experience' id='aib' type='text' size="lg" 
            value={experience}
            onChange={(event) => {
              setExperience(event.target.value);
            }}
            required/>
         


          

          <MDBBtn className="mb-6 w-100" size="lg"  onClick={save}>Sign up</MDBBtn>

        

        
        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </div>
    </div>
    

)
}
export default AdminSignup;