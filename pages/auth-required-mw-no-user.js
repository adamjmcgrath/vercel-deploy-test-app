import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>


      <main className={styles.main} style={{ whiteSpace: 'pre', fontSize: '20px'}}>
        <h1 className={styles.title}>
          Auth Required (Middleware) no user
        </h1>
        <p className={styles.description}>
          <p>Some products or something...</p>
        </p>
      </main>
    </div>
  )
}
