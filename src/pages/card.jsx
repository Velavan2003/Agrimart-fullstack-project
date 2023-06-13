import React, { Component } from 'react';
import '../components/cards.css';
import Appbar from './ferthome';
class Card extends Component {
    
    render() { 
        return (
            
            <div className='cardhome'>
    
                <Appbar/>
<div id="body">
    <div id="main">
        <div class="card">
            <img src="https://images.pexels.com/photos/2835599/pexels-photo-2835599.jpeg?auto=compress&cs=tinysrgb&w=600"  alt=""/>
            <div class="info">
                <h1>About Fertilizer</h1>
                <p>A fertilizer or fertiliser is any material of natural or synthetic origin that is applied to soil or to plant tissues to supply plant nutrients.</p>
            </div>
        </div>
        <div class="card">
            <img src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
            <div class="info">
                <h1>Fertilizer</h1>
                <p>List of Fertilizer</p>
                <a href="/home" class="btn">View Fertilizers</a>
            </div>
        </div>

      

        <div class="card">
            <img src="https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=300" alt=""/>
            <div class="info">
                <h1>Uses</h1>
                <p>Fertilizer is used to provide additional nutrients to the plants...It used to improve the yeild of the crop</p>    
            </div>
        </div>
    </div>
</div>
            </div>
        );
    }
}
 
export default Card;