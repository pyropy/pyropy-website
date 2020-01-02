import React from "react"

export default ({ project }) => {
  return (
    <React.Fragment>
      <div className="w-full p-5">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={project.image}
            alt={project.imageDescription}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.title}</div>
            <p className="text-gray-700 text-base">{project.description}</p>
          </div>
          <div className="px-6 py-4">
            {project.tags.map(tag => (
              <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
