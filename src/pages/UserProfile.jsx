import React from 'react'
import { useParams, Link } from 'react-router-dom'
import '../styles/Users.css'
import useSWR from 'swr'
import { swrConfig } from '../util/swrUtil'

const UserProfile = () => {
  const { userId } = useParams()
  const { data: user, error, isLoading: loading } = useSWR(`https://jsonplaceholder.typicode.com/users/${userId}`, swrConfig)

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
