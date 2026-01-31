import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/Users.css'

const Users = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  // useEffect(() => {
    // function to call api inside useEffect
  // }, [dependency Array])


  // api call -> fetch, axios

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    console.log("useEffect ran");
    fetchUsers()
  }, [])

  console.log("users page renderded");

  return (
    <div className="container">
      <h1>Users List</h1>

      {loading && <p className="loading">Loading users...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && (
        <div className="users-grid">
          {users.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id} style={{ textDecoration: 'none' }}>
              <div className="user-card">
                <h2>{user.name}</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Website:</strong> {user.website}</p>
                <p><strong>Company:</strong> {user.company.name}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Users
