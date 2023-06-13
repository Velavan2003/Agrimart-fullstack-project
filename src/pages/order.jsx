import {  useState } from "react";
import axios from "axios";
import '../components/order.css';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
 
function Order() {
  

    const [fertilizername, setFertilizername] = useState("");
    const [quantity, setQuantity] = useState("");
    const [address, setAddress] = useState("");
    const [feadback, setFeadback] = useState("");
    const navigate=useNavigate();
 
 
    async function save(event) {
        event.preventDefault();
        if(fertilizername===""||quantity===""||address===""||feadback==="")
        {
          alert("Please fill all the details")
        }
        else{
        
        try {
          await axios.post("http://localhost:8080/osave", {
         
          fertilizername: fertilizername,
          quantity: quantity,
          addess:address,
          feadback: feadback
          });
          alert("Ordered Successfull");
          navigate("/card")
 
        } catch (err) {
          alert(err);
        }
      }
      }
  
    return (
    <div className="orderbg">
      <Link to="/login" id='kr'><ArrowBackIcon /></Link>
    <div class="container mt-4" >
    <div class="">
            <h1>Place your order</h1>
    
    <form>
       
          <div class="form-group">
          <label>Fertilizername</label>
          <input type="text"  class="form-control" id="fertilizername" placeholder="Enter Fertilizername"
          
          value={fertilizername}
          onChange={(event) => {
            setFertilizername(event.target.value);
          }}
          />
 
        </div>
 
        <div class="form-group">
          <label>No of Quantity</label>
          <input type="number"  class="form-control" id="Quantity" placeholder="Quantity in Kg"
          
          value={quantity}
          onChange={(event) => {
            setQuantity(event.target.value);
          }}
          
          />
        </div>
        <div class="form-group">
          <label>Address</label>
          <input type="text"  class="form-control" id="address" placeholder="Enter your Address"
          
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
          
          />
        </div>
 
        <div class="form-group">
            <label>Feadback</label>
            <input type="text"  class="form-control" id="feadback" placeholder="Enter your Feadback"
            
            value={feadback}
            onChange={(event) => {
              setFeadback(event.target.value);
            }}
            
            />
          </div>
        
        <button type="submit" class="btn btn-primary mt-4" onClick={save} >conform order</button>
      
      </form>
    </div>
    </div>
     </div>
    );
  }
  
  export default Order;
  