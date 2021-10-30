import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import './addLocation.css'

const AddLocation = () => {
    const {user} = useContext(Context);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
 
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
          console.log('hfdjhfkjsd');
            const res = await axios.post('/api/location/', {title, image, desc, price, username:user.displayName})
            window.location.replace('/');
            console.log(res); 
        } catch (error) {
            console.log(error)
        }
        setTitle('');
        setImage('');
        setPrice('');
        setDesc('');

    }
 
    return (
        <div className='add-location'>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Location Name</label>
  <input type="text" className="form-control"  placeholder="Name OF Destination" onChange={e=> setTitle(e.target.value)} value={title} required/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Location Image</label>
  <input type="text" className="form-control"  placeholder="Enter Image URL" value={image} onChange={e=> setImage(e.target.value)} required/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Price</label>
  <input type="number" className="form-control"  placeholder="Enter Price" value={price} onChange={e=> setPrice(e.target.value)} required/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Location Description</label>
  <textarea className="form-control"  rows="3"  onChange={(e)=> setDesc(e.target.value)} value={desc} required></textarea>
</div>
<button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default AddLocation
