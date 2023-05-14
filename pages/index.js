import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home({ session }) {
  if (!session) {
    console.log('no session');
  } else {
    console.log('has session');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Restricted Access</title>
      </Head>
      <main>
        <code>...</code>
      </main>
      {/* <footer className={styles.footer}>
        <a
          href="https://vapezone.pro"
          target="_blank"
          rel="noopener noreferrer"
        >
          2023
        </a>
      </footer> */}
    </div>
  );
}
