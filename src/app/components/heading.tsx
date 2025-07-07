import React from 'react'

type Heading = {
  hname : string
}

const Heading = (props: Heading) => {
  return (
    <div>
        <h1 key={props.hname} className='text-3xl md:text-4xl xl:text-5xl font-bold'>{props.hname}</h1>
    </div>
  )
}

export default Heading