 import React, { Component } from 'react';
 import "../components/signup.css";
 import {  useState } from "react";
 import { useNavigate } from 'react-router-dom';
import axios from "axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [password, setPassword] = useState("");
  const [userroll, setUserroll] = useState("");
  const navigate = useNavigate();


  async function save(event) {
      event.preventDefault();
      if(username===""||email===""||mobilenumber===""||password===""||userroll==="")
      {
        alert("Please fill all the details")
      }
      else{
      try {
        await axios.post("http://localhost:8080/usersave", {
      
        username: username,
        email: email,
        mobilenumber:mobilenumber,
        password: password,
      userroll:userroll
        });
        alert("User Registation Successfull");
        navigate("/")

      } catch (err) {
        alert(err);
      }
    }
    }
  
    return (

      <div className='signbg'>
        <Link to="/" id='kr'><ArrowBackIcon /></Link>
        <h1 id='urg'>Signup</h1>
        <form id='form' action="/">
          <table>
            <tr>
            
              <td><b id='cc'>Username</b></td>
              <td><input type="text" placeholder='Enter your Username' id='uno'  value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
              required/></td>
           
            </tr>
            <tr>
            
            <td><b id='cc'>Email</b></td>
            <td><input type="email" placeholder='Enter your name' id='uno' 
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
            required/></td>
         
          </tr>
          <tr>
            
            <td><b id='cc'>Password</b></td>
            <td><input type="password" placeholder='Enter your password' id='uno' 
                value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required/></td>
         
          </tr>
          <tr>
            
            <td><b id='cc'>Mobile No</b></td>
            <td>
            <select id='sa'>
              <option type="">+91</option>
              <option type="">+81</option>
              <option type="">+71</option>
              <option type="">+61</option><br></br>
              </select>
              
            <input type="tel" placeholder='Enter your number' id='sab' 
                 value={mobilenumber}
                 onChange={(event) => {
                   setMobilenumber(event.target.value);
                 }}
            required/></td>
         </tr>
         <tr>
            
            <td><b id='cc'>Userroll</b></td>
            <td><input type="text" placeholder='Enter Userroll' id='uno' 
                  value={userroll}
                  onChange={(event) => {
                    setUserroll(event.target.value);
                  }}
            required/></td>
         
          </tr>
        
       <br></br>
            
          </table>
          <button id='ros' onClick={save}>Submit</button>
        </form>
      </div>
    );
  
}
 
export default Signup;