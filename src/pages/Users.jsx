import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import '../styles/Users.css'

const Users = () => {
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')

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
