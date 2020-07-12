import PropTypes from "prop-types"

const LinkCard = ({ labelContents, children }) => {
  return (
    <div className="flex space-x-1">
      <div className="font-semibold flex-initial">{labelContents}</div>
      <div className="flex-initial">{children}</div>
    </div>
  )
}

LinkCard.propTypes = {
  labelContents: PropTypes.element,
  children: PropTypes.any,
}

export default LinkCard
