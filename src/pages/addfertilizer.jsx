import React, { Component } from 'react';
import "../components/signup.css";
import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function Addfertilizer() {
 const [id, setId] = useState("");
 const [cost, setCost] = useState("");
 const [expired, setExpired] = useState("");
 const [manufactured, setManufactured] = useState("");
 const [name, setName] = useState("");
 const navigate = useNavigate();


 async function save(event) {
     event.preventDefault();
     if(id===""||cost===""||manufactured===""||expired===""||name==="")
     {
       alert("Please fill all the details")
     }
     else{
     try {
       await axios.post("http://localhost:8080/save", {
     
       id: id,
       cost: cost,
       manufactured:manufactured,
       expired: expired,
     name:name
       });
       alert("Fertilizer Added Successfully");
       navigate("/delete")

     } catch (err) {
       alert(err);
     }
   }
   }
 
   return (

     <div className='addbg'>
       <h1 id='urg'>Add Fertilizer</h1>
       <form id='form' >
         <table>
           <tr>
           
             <td><b id='cc'>Fertilizer Id</b></td>
             <td><input type="number" placeholder='Enter Fertilizer id' id='uno'  value={id}
         onChange={(event) => {
           setId(event.target.value);
         }}
             required/></td>
          
           </tr>
           <tr>
           
           <td><b id='cc'>Fertilizer Name</b></td>
           <td><input type="text" placeholder='Enter Fertilizer name' id='uno' 
                 value={name}
                 onChange={(event) => {
                   setName(event.target.value);
                 }}
           required/></td>
        
         </tr>
         <tr>
           
           <td><b id='cc'>Cost</b></td>
           <td><input type="text" placeholder='Enter Fertilizer cost' id='uno' 
               value={cost}
           onChange={(event) => {
             setCost(event.target.value);
           }}
           required/></td>
        
         </tr>
     
        <tr>
           
           <td><b id='cc'>Manufactured</b></td>
           <td><input type="date" placeholder='Enter Manufactured date' id='uno' 
                 value={manufactured}
                 onChange={(event) => {
                   setManufactured(event.target.value);
                 }}
           required/></td>
        
         </tr>
        <tr>
           
           <td><b id='cc'>Expired</b></td>
           <td><input type="date" placeholder='Enter Expired Date' id='uno' 
                 value={expired}
                 onChange={(event) => {
                   setExpired(event.target.value);
                 }}
           required/></td>
        
         </tr>
       
      <br></br>
           
         </table>
         <button id='ros' onClick={save}>Add</button>
       </form>
     </div>
   );
 
}

export default Addfertilizer;