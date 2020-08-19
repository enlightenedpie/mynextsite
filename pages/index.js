import Head from 'next/head'
import styles from '../styles/Home.module.css'

const year = (new Date).getFullYear()

const Home = props => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">{props.mysite}</a>
        </h1>

        <p className={styles.description}>
          Come back later, I'm still 
          <code className={styles.code}>npm update</code> 'ing this bad boy
        </p>
      </main>

      <footer className={styles.footer}>&copy; {year} Dave</footer>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const configData = await import(`../data/config.json`)
  return {
    props: {...configData},
  }
}