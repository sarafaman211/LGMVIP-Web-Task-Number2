import React, { useState } from 'react'
import GetUsers from './GetUsers'

const Home = () => {
  const [user, setUser] = useState([])

  const getUsers = async () => {
    const res = await fetch("https://reqres.in/api/users?page=1", {
      method: "GET",
      headers: {
        "Content-Type": 'application/json'
      }
    })

    const { data } = await res.json()
    setUser(data)
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Get Users</h1>
      <button style={{ margin: "1.5rem 6rem" }} onClick={() => getUsers()} >fetch Users</button>
      <div className=" row" style={{ margin: "0 4rem" }}>
        {user && user.map(data => {
          return <GetUsers key={data.id} users={data} />
        })}
      </div>
    </div>
  )
}

export default Home