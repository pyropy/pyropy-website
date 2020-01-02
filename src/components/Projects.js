import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import ProjectCard from "./ProjectCard"

export default ({data}) => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    let filteredProjects = data.viewer.repositories.nodes.filter(project => project.isPrivate == false);
    setProjects(filteredProjects)
  }, [])

  return (
    <React.Fragment>
      <h1 className="text-center text-5xl">My projects</h1>
      <div className="container mx-auto">
        <div class="flex flex-wrap -mx-2 overflow-hidden">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    viewer {
      repositories(first: 100, isFork: false, affiliations: OWNER) {
        nodes {
          id
          name
          url
          isPrivate
          description
          openGraphImageUrl
        }
      }
    }
  }
`
