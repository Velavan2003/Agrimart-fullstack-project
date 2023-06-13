import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../components/home.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

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

  handleFilterTextChange = (event) => {
    this.setState({ filterText: event.target.value }); 
  }

  render() {
    const { posts, filterText } = this.state;

    // Filter the posts based on the filterText
    const filteredPosts = posts.filter(post =>
      post.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div className="homebg">
        <Link to="/card" id='kr'><ArrowBackIcon /></Link>
        <div>
          <h1> Fertilizer Details </h1>
        
           <div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" 
  value={filterText} onChange={this.handleFilterTextChange}/>
  <button type="button" class="btn btn-outline-primary">search</button>
</div>
          <table className="table table-striped">
            <thead style={{ backgroundColor: 'green', color: 'white', borderRadius: '10px' }}>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Cost</th>
                <th>Manufactured</th>
                <th>Expired</th>
                <th>Order</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post, i) => (
                <tr key={i}>
                  <td>{post.id}</td>
                  <td>{post.name}</td>
                  <td>{post.cost}</td>
                  <td>{post.manufactured}</td>
                  <td>{post.expired}</td>
                  <td><button id="orb"><Link to="/order" style={{ color: 'white' }}>Order</Link></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
