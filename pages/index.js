import Head from 'next/head'

import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home = props => {
  return (
    <Layout title={props.title}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">{props.mysite}</a>
      </h1>

      <p className={styles.description}>
        Come back later, I'm still <code className={styles.code}>npm update</code>'ing this bad boy
      </p>
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  const configData = await import(`../data/config.json`)
  return {
    props: {...configData},
  }
}