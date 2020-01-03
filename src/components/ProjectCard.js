import React from "react"
import { DiGithubBadge } from "react-icons/di"

export default ({ project }) => {
  return (
    <React.Fragment>
      <div class="p-4 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-h-40 shadow-md bg-white rounded flex flex-col items-start">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 hover:underline hover:text-gray-800 font-semibold"><a href={project.url} target="_blank">{project.name}</a></div>
            <p className="text-gray-700 flex-grow py-2 text-sm text-base">{project.description}</p>
          </div>
          <div className="px-6 py-3">
            <span className="inline-block text-3xl px-3 py-1 mr-2">
              <a data-toggle="tooltip" title="Open project on Github" href={project.url} target="_blank">
                  <DiGithubBadge />
                </a> 
            </span>
          </div>
        </div>
    </React.Fragment>
  )
}
