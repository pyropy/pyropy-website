import React from "react"


export default ({content}) => {
  return (
    <React.Fragment>
      <h1 className="text-center text-5xl">{content.title}</h1>
      <div className="container mx-auto">
        <div className="text-center text-2xl text-gray-600">{content.description}</div>
      </div>
    </React.Fragment>
  )
}
