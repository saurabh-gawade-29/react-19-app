import React from 'react'
import { useRouteError } from 'react-router-dom'

const NotFound = () => {
  //! React 19 Hook
  const error = useRouteError();
  console.log(error, "error");
  return (
    <div>{error.status} NotFound</div>
  )
}

export default NotFound