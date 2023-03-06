import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeCard(props) {
    return ( 
            <div className='hcard'>

                <div className='pcard card'>
                    <img src={props.img} alt="" height={'200'}/>
                    <p style={{"fontWeight": "bold"}}>{props.name}</p>
                    <p style={{color: "lightgray"}}>{props.brand}</p>
                    <p>Rs.{props.price}</p>
                    <button className='btn btn-dark buycart'>Buy Now</button>
                    <button className='btn btn-warning  buycart'>Add to cart</button>
                </div>
            </div>
        
     );
}

export default HomeCard;