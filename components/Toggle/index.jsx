import PropTypes from 'prop-types'

const Toggle = (props) => {
  const { label, isToggleOn, onClick } = props

  return (
    <li>
      <span id={`toggle--${label}`}>{label}</span>
      <button
        aria-labelledby={`toggle--${label}`}
        aria-pressed={isToggleOn}
        onClick={onClick}
        type="button"
      >
        {isToggleOn ? 'on' : 'off'}
      </button>
    </li>
  )
}

Toggle.propTypes = {
  label: PropTypes.string.isRequired,
  isToggleOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Toggle
