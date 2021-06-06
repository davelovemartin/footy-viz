import PropTypes from 'prop-types'
import styles from './Section.module.scss'

const Section = (props) => {
  const { children } = props

  return <section className={styles.section}>{children}</section>
}

Section.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default Section
