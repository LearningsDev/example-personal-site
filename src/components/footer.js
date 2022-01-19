import React from "react";
import PropTypes from "prop-types"


const Footer = ({ siteTitle }) => {
  return (
    <div className="bottom-0 right-0 h-64 bg-gray-900 flex justify-center items-center text-white font-light text-xs">
      © {new Date().getFullYear()}, All Rights Reserved
      {` `}
      <a className="text-white mx-2" href="https://www.example.com"> {siteTitle}</a>
    </div >
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer