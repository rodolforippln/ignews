import Head from 'next/head'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Teste</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> Word.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.99 month</span>
          </p>

        </section>

        <img src='/image/avatar.svg' alt='avatar' />
      </main>
      
    </>
  )
}
