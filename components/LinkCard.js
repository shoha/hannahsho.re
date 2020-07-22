import PropTypes from "prop-types"

const LinkCard = ({ labelContents, children }) => {
  return (
    <div className="link-card text-left flex flex-col md:flex-row space-x-1 bg-blush shadow hover:shadow-lg transition duration-100 rounded-lg">
      <div className="link-card__label flex-initial text-gray-700 bg-coral p-3 rounded-tl-lg rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg">
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
