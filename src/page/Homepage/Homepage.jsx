import './homepage.css';

import React, { useContext } from 'react'
import { Context } from '../../context/Context';
import Card from '../../component/Card/Card';

const Homepage = () => {
    const {location} = useContext(Context);
    const cards = location.filter((l,i)=> i<6).map((l, i)=>(<Card key={i} {...l}/>))
    return (
        <div className='homepage'>
            <div className="cover">
  <img src="https://www.artflakes.com/artwork/products/891251/zoom/03-travel.jpg?1335977843" className="cover-image" alt="cover"/>
  <div className="cover-text">
    <h2>Welcome</h2>
    <p className="lead">We are here to make your Holiday more fun and enjoyable. We will make sure you have the best experience </p>
  </div>
</div>  
<div className="destination">
<span className='display-4'>The Destianations To visit</span>
            <main>
                {cards}
            </main> 
</div>
<div className="packages">
<span className='display-5'>Our Packages</span>
<div className="container">
    <div className="pack">
        <h1>Brooze</h1>
        <span className="h4"><i class="bi bi-bookmark-star"></i> For Booking One desitanation</span>
        <span className="h5"><i class="bi bi-arrow-right-square"></i> 2 tickets Free</span>
        <span className="h5"><i class="bi bi-arrow-right-square"></i> No free meals</span>
        <span className="h5"><i class="bi bi-arrow-right-square"></i> one person Free Add one</span>
    </div>
    <div className="pack">
        <h1>Silver</h1>
        <span className="h4"><i class="bi bi-bookmark-star"></i> For Booking Two desitanation</span>
        <span className="h5"><i class="bi bi-arrow-right-square"></i> 3 tickets Free</span>
        <span className="h5"><i class="bi bi-arrow-right-square"></i> 1 free meals per day</span>
        <span className="h5"><i class="bi bi-arrow-right-square"></i> one person Free Add one</span>
    </div>
    <div className="pack">
        <h1>Gold</h1>
        <span className="h4"><i class="bi bi-bookmark-star"></i> For Booking Three and more desitanation</span>
        <span className="h5"><i class="bi bi-arrow-right-square"></i> 4 tickets Free</span>
        <span className="h5"><i class="bi bi-arrow-right-square"></i> 3 free meals perday</span>
        <span className="h5"><i class="bi bi-arrow-right-square"></i> Two person Free Add one</span>
    </div>
</div>
</div>
<div className="reviews">
<span className='display-6'>Reviews From Our Customers</span>
<div className="container">
    <div className="review">
    <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61152a9856bc7f8f6fac06d7%2F0x0.jpg%3FcropX1%3D52%26cropX2%3D1618%26cropY1%3D46%26cropY2%3D927" className='img-fluid' alt="customer" />
    <span className="h5">Name: Jonathan Flinse</span>
    <q>They are really Good with there Services</q>
    </div>
    <div className="review">
    <img src="https://variety.com/wp-content/uploads/2021/08/Ryan-Reynolds.jpg?w=1000" className='img-fluid' alt="customer" />
    <span className="h5">Name: Mike Lasley</span>
    <q>I had a freat time . And I would like to book my vacation again with them</q>
    </div>
    <div className="review">
    <img src="https://deadline.com/wp-content/uploads/2019/03/simon-pegg.jpg?w=630&h=383&crop=1" className='img-fluid' alt="customer" />
    <span className="h5">Name: Arnold Hisenger</span>
    <q>I loved them and I recommended them to all of my friends and family</q>
    </div>
   
</div>
</div>
        </div>
    )
}

export default Homepage
