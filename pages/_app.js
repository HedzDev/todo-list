import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Todo List 📝</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
