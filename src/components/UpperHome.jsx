import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UpperHome() {
    return ( 
        <>
            <section className="bg">
                <div className="uppertext">
                    <span className="exclusive"> Exclusive</span> 
                    <h3 className="upFont">
                        New Year's Sale!
                    </h3>
                    <p className="upFont2">
                        Upto 70% Off!
                    </p>
                    <button className="btn rounded-pill btn-dark signb px-5">
                        Sign Up
                    </button>
                    <button className="btn rounded-pill btn-outline-dark signb px-5">
                        Login
                    </button>
                </div>
                
            </section>
            

            
    </>
     );
}

export default UpperHome;