import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/Users.css'

const UserProfile = () => {
  const { userId } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchUser = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      setUser(response.data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [userId])

  if (loading) return <div className="container"><p className="loading">Loading user...</p></div>
  if (error) return <div className="container"><p className="error">Error: {error}</p></div>
  if (!user) return <div className="container"><p>User not found</p></div>

  return (
    <div className="container">
      <Link to="/users" className="back-link">← Back to Users</Link>
      <div className="user-profile">
        <h1>{user.name}</h1>
        <div className="profile-details">
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Company:</strong> {user.company.name}</p>
          <p><strong>City:</strong> {user.address.city}</p>
          <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
