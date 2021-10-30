import './contact.css';

import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="cover">
                <h1>Contact Us</h1>
                
            </div>
            <h2>You can contact Us For more Informations</h2>
            <div className="wrapper">
                    <div>
                       <h3>Our Address</h3>
                       <address>4th Floor, new tech building, Uttara , Dhaka-1400 , Bangladesh</address> 
                    </div>
                    <div>
                       <h3>Our Email and Phone</h3>
                        <p className="lead">Email: mahmudtravels@gmail.com</p>
                        <p className="lead">Phone: +88011244112568</p>
                    </div>
                    <div>
                        <h3>Our Website and Subscribe to Our newsletter</h3>
                        <p className="lead">Our website: mahmudtravels.com</p>
                        <input type="email" className="form-control" placeholder='Enter email to Subscribe to our Newsletter'/>
                        <button className='btn btn-secondary mb-3 mt-2'>Subscribe</button>
                    </div>
                </div>
        </div>
    )
}

export default Contact
