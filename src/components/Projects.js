import React, { useEffect, useState } from "react"
import Card from "./Card"
import content from "../content.json"

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(content.content.projects)
  }, [])

  return (
    <div className="container mx-auto px-5">
      <div className="inline-flex mb-4">
        {projects.map(project => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
