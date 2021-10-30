import React from 'react'

const Loading = () => {
    return (
        <div className="d-flex align-items-center" style={{width:'50%', margin:'10px auto ', fontSize:'3rem'}}>
        <strong>Loading...</strong>
        <div className="spinner-border text-primary ms-auto" role="status" aria-hidden="true"></div>
      </div>
    )
}

export default Loading
