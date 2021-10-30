import React from 'react'
import {Link} from 'react-router-dom';

const Card = ({title, image, desc, _id}) => {
    return (
        <div className='card-comp'>
            <div className="card" style={{width: '18rem', margin:'10px auto'}}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Title: {title}</h5>
    <p className="card-text">{desc.slice(0, 100)}...</p>
    <Link to={`/location/details/${_id}`} className="btn btn-primary">Book Now</Link>
  </div>
</div>
        </div>
    )
}

export default Card
