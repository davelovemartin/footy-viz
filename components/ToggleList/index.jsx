import PropTypes from 'prop-types'
import styles from './ToggleList.module.scss'

const ToggleList = (props) => {
  const { children } = props

  return <ul className={styles.toggleList}>{children}</ul>
}

ToggleList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default ToggleList
