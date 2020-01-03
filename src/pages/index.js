import React from "react"
import Projects from "../components/Projects"
import DescSection from "../components/DescriptionSection"
import Contact from "../components/Contact"
import content from "../content.json"

const Index = ({ data }) => {
  return (
    <div id="app">
      <DescSection content={content.about} />
      <Projects repositories={data.github.viewer.repositories} />
      <Contact content={content.contact} />
    </div>
  )
}

export default Index

export const query = graphql`
  query RepositoryQuery {
    github {
      viewer {
        repositories(
          first: 100
          isFork: false
          privacy: PUBLIC
          affiliations: OWNER
          orderBy: { field: STARGAZERS, direction: DESC }
        ) {
          nodes {
            id
            name
            url
            description
          }
        }
      }
    }
  }
`
