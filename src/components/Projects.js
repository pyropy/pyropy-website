import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import ProjectCard from "./ProjectCard"

export default ({ data }) => {
  return (
    <React.Fragment>
      <h1 className="text-center text-5xl">My projects</h1>
      <div className="container mx-auto">
        <div class="flex flex-wrap -mx-2 overflow-hidden">
          {data.viewer.repositories.nodes.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export const query = graphql`
  query ProjectsQuery {
    github {
        viewer {
        repositories(first: 100, isFork: false, privacy: PUBLIC, affiliations: OWNER, orderBy: {field: STARGAZERS, direction: DESC}) {
          nodes {
            id
            name
            url
            description
            openGraphImageUrl
          }
        }
      }
    }
  }
`
