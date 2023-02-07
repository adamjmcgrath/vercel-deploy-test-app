import Head from 'next/head'
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import styles from '../styles/Home.module.css'

export default function Home() {
  const { user } = useUser();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main} style={{ whiteSpace: 'pre', fontSize: '20px'}}>
        <h1 className={styles.title}>
          Auth Required
        </h1>
        <p className={styles.description}>
          <code>{JSON.stringify(user, null, 2)}</code><br/>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/"><button>Home</button></a>
        </p>
      </main>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired();
