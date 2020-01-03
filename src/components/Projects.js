import React from "react"
import ProjectCard from "./ProjectCard"

export default ({ repositories }) => {
  return (
    <React.Fragment>
      <h1 className="text-center text-5xl py-10">My projects</h1>
      <div className="container mx-auto">
        <div class="flex flex-wrap -mx-2 overflow-hidden">
          {repositories.nodes.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}