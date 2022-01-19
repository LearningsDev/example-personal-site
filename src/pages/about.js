import * as React from "react"


import Layout from "../components/layout"

const About = ({ location }) => {

  return (
    <Layout location={location}  >
      <div className="h-screen bg-indigo-300">

        <div className=" h-full text-xl font-semibold  flex justify-center items-start">
          <div className="m-5">
            {location.state.description}
          </div>
        </div>
      </div>
    </Layout>
  )
}



export default About
