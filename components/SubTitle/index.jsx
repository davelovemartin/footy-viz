import PropTypes from 'prop-types'
import styles from './SubTitle.module.scss'

const SubTitle = (props) => {
  const { children } = props

  return <h2 className={styles.subtitle}>{children}</h2>
}

SubTitle.propTypes = { children: PropTypes.string.isRequired }

export default SubTitle
