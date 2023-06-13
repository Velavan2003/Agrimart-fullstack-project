import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import '../components/delete.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



export default class Deleteagri extends React.Component {
  state = {
    posts: [],
    filterText: '', 
  };
  componentDidMount() {
    axios.get(`http://localhost:8080/agri`).then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  deleteRow(id, e){
    axios.delete(`http://localhost:8080/delete/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const posts = this.state.posts.filter(item => item.id !== id);
        this.setState({ posts });
      })
      
     

  }
  handleFilterTextChange = (event) => {
    this.setState({ filterText: event.target.value }); 
  }

 

  render() {
    const { posts, filterText } = this.state;

  
    const filteredPosts = posts.filter(post =>
      post.name.toLowerCase().includes(filterText.toLowerCase())
    );
    return (
      
      <div className="deletebg">
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6"  component="div" sx={{ flexGrow: 1 }}>
            Agrimart🌱
          </Typography>
          <Button color="inherit" ><Link  to="/addfertilizer" style={{color:'white'}} >Add Fertilizer</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
        <div >
        <h1 > Delete and Edit Fertifizer Details </h1>
        <div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" value={filterText} onChange={this.handleFilterTextChange}/>
  <button type="button" class="btn btn-outline-primary">search</button>
</div>

        <table class="table table-striped ">
          <thead  style={{backgroundColor: 'green',color:'white',borderRadius:'10px'}}>
            <tr>
            <th> Id</th>
        <th>Name</th>
        <th>Cost</th>
        <th>Manufactured</th>
        <th>Expired</th>
        <th>Delete</th>
        <th>Edit</th>
      
         
            </tr>
          </thead>

          <tbody>
          {filteredPosts.map((post,i) => (
              <tr key={i}>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.cost}</td>
                <td>{post.manufactured}</td>
                <td>{post.expired}</td>
                
              
                

                 <td><button onClick={(e) => this.deleteRow(post.id, e)} class="fa-solid fa-trash" id="orb">delete</button></td>
                 <td><button id="orb"><Link classname='text-decoration-none '  to={`/update/${post.id}`} class="fa-solid fa-pen-to-square" style={{color:'white'}}>Update</Link></button></td>
                 


              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    
    );
  }
}