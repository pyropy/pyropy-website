import React from "react"

export default ({ content }) => {
  return (
    <React.Fragment>
      <h1 className="text-center text-5xl">{content.title}</h1>
      <div className="container mx-auto">
        <p className="text-center text-gray-600 text-2xl">
          {content.description}
          <a href={`mailto: ${content.description}`}></a>
        </p>
      </div>
    </React.Fragment>
  )
}
