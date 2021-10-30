import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { Context } from '../../context/Context';
import './details.css'
const Details = () => {
    const id = useParams().id;
    const {location} = useContext(Context);
    const [bookDate, setBookDate] = useState('');
    const [duration, setDuration] = useState('');
    const {user} = useContext(Context);
    const [error, setError] = useState(null);
    const selected = location.filter((l,i)=> l._id === id)[0];

    const handleSubmit = async (e) =>{
      const  {_id} = selected;
        e.preventDefault();
        console.log(bookDate)
        try {
            const res = await axios.post('/api/bookings/', {username:user.displayName,bookDate, duration, location:_id })
            console.log(res);
            window.location.replace('/');
        } catch (error) {
            console.log('or this one may be')
            setError('Something went wrong')
        }
       
        setBookDate('')
        setDuration('')

    }
    return (
        <div className='details' style={{background:`linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${selected.image})  no-repeat` , backgroundSize:'cover'}}>
           
            <div className="wrapper">
            <span className='display-6'>Destination:{selected.title} </span>  
            <img src={selected.image} alt={selected.title}  className='img-fluid' style={{padding:'20px', width:'50%'}}/>
            <span className='lead'>Description:{selected.desc} </span>  
            <span className='h5'>Price: ${selected.price} /day </span>  
            <span className="lead">User Name : {user.displayName}</span>
            <span className="lead">Email : {user.email}</span>
            <form  className="row" onSubmit={handleSubmit}>
            <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Booking Date:</label>
    <div class="col-sm-10">
      <input type="date" class="form-control"  onChange={e=> setBookDate(e.target.value)} value={bookDate} required/>
    </div>
    </div>
    <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Stay Duration:</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" placeholder='days' onChange={e=> setDuration(e.target.value)} value={duration} required/>
    </div>
        </div>
        <button className='btn btn-primary'>Submit Booking</button>
            </form>
            {error?<h1 className='alert alert-danger'>{error}</h1>: null }
            </div>
        </div>
    )
}

export default Details
