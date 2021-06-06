import PropTypes from 'prop-types'
import styles from './Section.module.scss'

const Section = (props) => {
  const { children } = props

  return <section className={styles.section}>{children}</section>
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Section
