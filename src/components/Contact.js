import React from "react"
import { MdEmail } from "react-icons/md"
import { IoLogoTwitter, IoLogoLinkedin } from "react-icons/io"
import { DiGithubBadge } from "react-icons/di"

export default ({ content }) => {
  return (
    <React.Fragment>
      <h1 className="text-center text-5xl py-10">{content.title}</h1>
      <div className="container mx-auto">
        <div className="flex justify-center flex-row flex-wrap">
          <span className="w-1/16 px-2 text-5xl">
            <a href={`mailto: ${content.email}`}>
              <MdEmail />
            </a>
          </span>
          <span className="w-1/16 px-2 text-5xl">
            <a href={content.twitter} target="_blank">
              <IoLogoTwitter />
            </a>
          </span>
          <span className="w-1/16 px-2 text-5xl">
            <a href={content.github} target="_blank">
              <DiGithubBadge />
            </a>
          </span>
          <span className="w-1/16 px-2 text-5xl">
            <a href={content.linkedin} target="_blank">
              <IoLogoLinkedin />
            </a>
          </span>
        </div>
      </div>
    </React.Fragment>
  )
}
