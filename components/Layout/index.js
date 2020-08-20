import Head from 'next/head'
import styles from '../../styles/index.module.scss'

const year = (new Date).getFullYear()

const Layout = ({title,children}) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <header></header>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>&copy; {year} Dave</footer>
    </div>
  )
}

export default Layout