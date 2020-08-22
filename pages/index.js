import Layout from '../components/Layout'
import Instagram from '../components/Instagram'
import styles from '../styles/index.module.scss'

const Home = props => {
  return (
    <Layout title={props.title}>
      <section>
        <h1 className={styles.title}>
          Welcome to <a href="/babbish">{props.mysite}</a>
        </h1>

        <p className={styles.description}>
          Check back later, I'm still <code className={styles.code}>npm update</code>'ing this bad boy
        </p>
      </section>

      <section className={styles.instagram}>
        <h2>Instagram</h2>
        <Instagram/>
      </section>
    </Layout>
  )
}

export default Home

export const config = { amp: "hybrid" }

export async function getStaticProps() {
  const configData = await import(`../data/config.json`)
  return {
    props: {...configData},
  }
}