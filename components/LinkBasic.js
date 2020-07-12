import PropTypes from "prop-types"

const LinkBasic = ({ href, children }) => {
  return (
    <a href={href} className="text-blue-600 hover:text-blue-800">
      {children}
    </a>
  )
}

LinkBasic.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any,
}

export default LinkBasic
