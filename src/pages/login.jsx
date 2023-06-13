import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {Link} from 'react-router-dom'; 
import "../components/login.css";
function Login() {
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 
 
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/newlogin", {
            username: username,
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
                
                navigate('/card');
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
  
  
  
  
  
  
    return (
      
       <div className="loginbg">
           <div className="bgimg">
     

     <div className="app" >
       <div className="login-form">
         <div className="title">Login</div>
         <div className="form">
       <form id="forl">
         <div className="input-container">
           
           <input type="text" placeholder="Username" id='fan' name="uname"  value={username}
           onChange={(event) => {
             setUsername(event.target.value);
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
         <Link to="/signup">Signup</Link>
         </div>
         <div>For Admin login - 
         <Link to="/adminlogin">Admin Login</Link>
         </div>
       </form>
     </div>
     
     
     </div> 
       </div>
 </div>
 
     </div>
    
    );
  }
  
  export default Login;