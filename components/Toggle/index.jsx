import PropTypes from 'prop-types'
import styles from './Toggle.module.scss'

const Toggle = (props) => {
  const { label, isToggleOn, onClick } = props

  return (
    <li className={styles.toggle}>
      <span id={`toggle--${label}`} className={styles.togglelabel}>
        {label}:
      </span>
      <button
        aria-labelledby={`toggle--${label}`}
        aria-pressed={isToggleOn}
        onClick={onClick}
        type="button"
      >
        <span className={!isToggleOn ? styles.toggleOn : null}>on</span>
        <span className={isToggleOn ? styles.toggleOn : null}>off</span>
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
