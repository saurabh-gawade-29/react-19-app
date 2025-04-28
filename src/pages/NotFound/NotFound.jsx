import React from 'react'
import { useRouteError, Link } from 'react-router-dom'
import "./NotFound.css"

const NotFound = () => {
  //! React 19 Hook
  const error = useRouteError();
  console.log(error, "error");
  return (
    <>
      <div className="not-found-container">
        <h1 className="not-found-title">{error.status}</h1>
        <p className="not-found-message">
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/" className="not-found-link">
          <button className="not-found-button">Go to Home</button>
        </Link>
      </div>
    </>
  )
}

export default NotFound