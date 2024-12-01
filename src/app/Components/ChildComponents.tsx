import React from 'react'

const ChildComponents = (props:any) => {
    console.log(props)
  return (
    <div>
        <h1 className="text-6xl">
        {" "}
        {props.name} {props.age} {props.col}{" "}
      </h1>
    </div>
  )
}

export default ChildComponents
