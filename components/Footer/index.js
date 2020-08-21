import styles from "./footer.module.scss"

const year = (new Date).getFullYear()

const Footer = () => {
  return (
    <footer className={styles.footer}>&copy; {year} Dave</footer>
  )
}

export default Footer