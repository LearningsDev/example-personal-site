import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data, location }) => {


  const seoData = data.site.siteMetadata
  return (
    < Layout location={location} >
      <Seo title={seoData.title} description={seoData.description} keywords={seoData.keywords} />
      <div className="h-screen bg-indigo-100 flex justify-center items-center">
        <div className=" text-4xl text-indigo-800 ">
          Hello World!
        </div>
      </div>
    </Layout >)
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        keywords
        social {
          twitter
        }
      }
    }
  }
`