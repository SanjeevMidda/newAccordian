import React from 'react'

function Block({changeStatus, title, newStatus, text}) {
  return (
    <div className="blockStyling">
        <button onClick={changeStatus}>{title}</button>
        <p>{newStatus && text}</p>

    </div>
  )
}

export default Block
