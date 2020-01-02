import React from "react"
import Projects from "../components/Projects"
import DescSection from "../components/DescriptionSection"
import Contact from "../components/Contact"
import content from '../content.json'

export default () => {
    return (
        <div id="app">
            <DescSection content={content.about} />
            <Projects/>
            <Contact content={content.contact} />
        </div>
    )
}