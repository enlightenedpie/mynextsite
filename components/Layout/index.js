import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'

import styles from './layout.module.scss'

const Layout = ({title,children}) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout