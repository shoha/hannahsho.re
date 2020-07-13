import PropTypes from "prop-types"

const LinkCard = ({ labelContents, children }) => {
  return (
    <div className="link-card text-left flex space-x-1 bg-blush rounded-lg shadow hover:shadow-lg transition duration-100">
      <div className="link-card__label flex-initial rounded-l-lg text-gray-700 bg-coral p-3">
        {labelContents}
      </div>
      <div className="link-card__contents flex-initial p-3">{children}</div>

      <style jsx>{`
        .link-card {
          max-width: 500px;
        }

        .link-card__label {
          min-width: 100px;
        }
      `}</style>
    </div>
  )
}

LinkCard.propTypes = {
  labelContents: PropTypes.string,
  children: PropTypes.any,
}

export default LinkCard
