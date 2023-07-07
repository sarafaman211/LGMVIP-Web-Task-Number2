import React from 'react'
import Loaders from "../../config/Spinner-1s-200px.gif"

const Loader = () => {
  return (
    <div className='loader-container' style={{ textAlign: "center" }}>
        <img src={ Loaders } alt="spinner" />
    </div>
  )
}

export default Loader