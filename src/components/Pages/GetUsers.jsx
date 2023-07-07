import React from 'react'

const GetUsers = ({ users }) => {
    const { first_name, avatar, last_name, email } = users
    return (
        <div className="card col-md-6" style={{width: "18rem"}}>
        <img src={avatar ? avatar: <h1>no image found</h1>} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">First Name: {first_name}</h5>
          <h5 className="card-title">Last Name { last_name }</h5>
          <p className="card-text">Email Address: {email }</p>
        </div>
      </div>
    )
}

export default GetUsers