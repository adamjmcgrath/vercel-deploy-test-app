import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0';
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { user } = useUser();
  
  useEffect(() => {
    (async () => {
      fetch('/api/hello');
      fetch('/api/hello2');
    })();
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App foo</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome {user?.name}
        </h1>

        <p className={styles.description}>
          { !!user ? <Link href="/api/auth/logout">logout</Link> : <Link href="/api/auth/login">login</Link> }
        </p>
      </main>
    </div>
  )
}
