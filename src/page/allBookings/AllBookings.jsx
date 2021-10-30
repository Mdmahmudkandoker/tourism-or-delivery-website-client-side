import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './allbooking.css'

const AllBookings = () => {
    const [bookings, setBookings] = useState([])
    const [modal, setModal] = useState('none');
    const [dltId, setDltId] = useState('');
    useEffect(() => {
       const getAllBookings = async () =>{
           const res = await axios.get('/api/bookings')
           console.log(res);
           setBookings(res.data)
       }
       getAllBookings();

    }, [])
    const handleApproval = async (id) =>{
        try {
            const res = axios.put('/api/bookings/' + id, {isDone:true})
            console.log(res)
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }
    const handleDisapproval = async (id) =>{
        try {
            const res = axios.put('/api/bookings/' + id, {isDone:false})
            console.log(res)
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }
    const handleModal = (id)=>{
        if(modal === 'none'){
            setModal('block')
            setDltId(id);
        }else{
            setModal('none')
            setDltId('')
        }
    }
    const handleDelete = async () =>{
        try {
            const res = await axios.delete('/api/bookings/' + dltId)
            console.log(res);
            setModal('none')
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }
    const modalCard =<div className="modal" style={{display:modal}} >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Confirm Delete</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModal}></button>
        </div>
        <div className="modal-body">
          <p>Are you Sure you Wanna delete this Permanently?</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleModal}>Close</button>
          <button type="button" className="btn btn-primary" style={{background:'red'}} onClick={handleDelete}>Confirm Delete</button>
        </div>
      </div>
    </div>
  </div>
const booking = bookings.map((b, i)=>{
    return (   <div className="card" style={{width: '18rem'}} key={i}>
    <img src={b.location.image} className="card-img-top" alt="..."  key={i}/>
    <div className="card-body"  key={i}>
      <h5 className="card-title"  key={i}>Title: {b.location.title}</h5>
      <p className="card-text"  key={i}>{b.location.desc.slice(0, 100)}...</p>
     <h4>Username : {b.username}</h4>
     < h5>Duration: {b.duration} days</h5>
     <h6>Booking Date : {b.bookDate}</h6>
     <p>Approval: {!b.isDone? <span className='btn btn-secondary' onClick={handleApproval.bind(this, b._id)}>Pending For Approval </span> 
     : 
     <span className='btn btn-success' onClick={handleDisapproval.bind(this, b._id)}>Approved</span>}</p>
       <button className='btn btn-danger' onClick={handleModal.bind(this, b._id)}>Delete</button>
    </div>
  </div>)
})
    return (
        <div className='all-bookings'>
            <h1>All The Bookings</h1>
            {modalCard}
            <main>
                {booking}
            </main>
        </div>
    )
}

export default AllBookings

