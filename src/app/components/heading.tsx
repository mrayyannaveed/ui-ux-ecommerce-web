import React from 'react'

const Heading = (props:any) => {
  return (
    <div>
        <h1 key={props.hname} className='text-5xl font-bold'>{props.hname}</h1>
    </div>
  )
}

export default Heading