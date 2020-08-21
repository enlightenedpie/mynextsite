import Head from 'next/head'
import Footer from '../Footer'

import styles from './layout.module.scss'

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
      <Footer/>
    </div>
  )
}

export default Layout