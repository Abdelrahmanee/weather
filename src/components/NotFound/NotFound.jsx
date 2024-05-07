import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container text-white  d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <h1 className="display-4 text-center">Oops! Page Not Found</h1>
      <p className="lead text-center mb-4">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-dark ">
        Go Back to Home
      </Link>
    </div>
  )
}
