import PropTypes from "prop-types"

const LinkBasic = ({ href, children }) => {
  return (
    <a href={href} className="text-gray-700 hover:underline">
      {children}
    </a>
  )
}

LinkBasic.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any,
}

export default LinkBasic
