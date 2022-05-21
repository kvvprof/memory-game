import React from 'react'

const MemoryItem = ({ id, value, src, success, active, choosingItem }) => {
  return (
    <div className="memory__item" onClick={() => choosingItem(id, value)}>
      {active === true
        ? <img className={`memory__item-img memory__item-img--${success}`} src={src} alt="" srcSet="" />
        : <img className="memory__item-img memory__item-img--unactive" src={src} alt="" srcSet="" />
      }
    </div>
  )
}

export default MemoryItem

