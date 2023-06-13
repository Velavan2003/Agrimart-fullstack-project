import axios from 'axios';
import React,{useEffect,useState} from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import { Stack } from "@mui/material";
import Button from '@mui/material/Button';


function Update(){
    const {id}=useParams();
    const [values,setValues]=useState({
        id:id,
        name:"",
        cost:"",
        manufactured:"",
        expired:"",   
    })
    useEffect(()=>{
        axios.get('http://localhost:8080/agri/'+id)
        .then(res=>{
            setValues({...values,id: res.data.id,
                name: res.data.name,
                cost: res.data.cost,
                manufactured:res.data.manufactured,
                expired:res.data.expired
            })
        })
        .catch(err => console.log(err))
    },[])
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put('http://localhost:8080/agri/'+id,values)
        .then(res=>{
            navigate('/delete');
        })
        .catch(err => console.log(err))
    } 
    return(
    
        <form >
           <div classname='updatebg'>
            
              <h1>Update</h1>

            <p>Fill in the Information Below</p>
        <Stack direction="column" spacing={1}> 
            <TextField id="out" label="Car Id" type="text"   value={values.id} onChange={e => setValues({...values,id: e.target.value})} />
            <TextField id="outlined-password-input" label="Fertilizer Name" type="text"   value={values.name} onChange={e => setValues({...values,name: e.target.value})}/>
            <TextField id="outlined-password-input" label="Fertilizer Cost" type="text"   value={values.cost} onChange={e => setValues({...values,cost: e.target.value})}/>
            <TextField id="outlined-password-input" label="Fertilizer Manufactured Date" type="text"   value={values.manufactured} onChange={e => setValues({...values,manufactured: e.target.value})}/>
            <TextField id="outlined-password-input" label="Fertilizer Expired Date" type="text"   value={values.expired} onChange={e => setValues({...values,expired: e.target.value})}/>
        
          
            <Button variant="contained" onClick={handleSubmit}> Edit</Button>
            </Stack>

           {/* <button onClick={handleSubmit}>edit</button>*/}
           </div>
           </form>
        
    )
    
}
export default Update;