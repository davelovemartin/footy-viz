import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const Button = (props) => {
  const { children, disabled, onClick } = props

  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  disabled: false,
}

export default Button
