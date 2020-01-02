import React from "react"

export default ({ project }) => {
  return (
    <React.Fragment>
      <div class="my-3 px-3 w-1/4 overflow-hidden">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src={project.openGraphImageUrl}
            alt={project.description}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{project.name}</div>
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
