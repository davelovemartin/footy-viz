import PropTypes from 'prop-types'
import styles from './Section.module.scss'

const Section = (props) => {
  const { children } = props

  return <section className={styles.section}>{children}</section>
}

Section.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.object,
  ]).isRequired,
}

export default Section
