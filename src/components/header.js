import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteData }) => {

  return (
    <div className="h-24 w-full bg-gray-600 text-white top-0 left-0 grid grid-cols-4 gap-4">

      <div className="ml-5 text-3xl font-bold p-5 col-span-3">
        <Link to="/">
          {siteData.title}
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-2 p-6 col-span-1">
        <div className="col-span-1 font-base">
          <Link to='/about' state={siteData}> About </Link>
        </div>
        <div className="col-span-1 font-base">
          <Link to='/contact' state={siteData}> Contact </Link>
        </div>
      </div>
    </div>
  )
}



Header.propTypes = {
  siteData: PropTypes.object,
}



export default Header
