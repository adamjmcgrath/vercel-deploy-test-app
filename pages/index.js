import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [ user, setUser ] = useState(null);
  
  useEffect(() => {
    (async () => {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setUser(data);
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
          { user?.name ? <Link href="/api/auth/logout">logout</Link> : <Link href="/api/auth/login">login</Link> }
        </p>
      </main>
    </div>
  )
}
