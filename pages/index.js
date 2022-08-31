import Head from 'next/head'
import { useUser } from "@auth0/nextjs-auth0";
import styles from '../styles/Home.module.css'

export default function Home() {
  const { user, isLoading } = useUser(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome {user?.name}
        </h1>

        <p className={styles.description}>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/auth-required"><button>Auth Required</button></a><br/>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/auth-required-mw"><button>Auth Required (Middleware)</button></a><br/>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          { user && <a href="/api/auth/logout"><button>logout</button></a>}
        </p>
      </main>
    </div>
  )
}
