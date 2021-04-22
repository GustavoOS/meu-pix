import Head from 'next/head'
import { KeyForm } from '../components/form'
import { Info } from '../components/info'
import styles from '../styles/Home.module.scss'
import { useRouter } from 'next/router'
import { Selector } from '../components/selector'
import { useState } from 'react'

export default function Home() {
  const router = useRouter();
  const { value, type } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Meu Pix</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Meu Pix é
        </h1>
        <h1 className={styles.icon}>
          <i className="bi bi-x-diamond-fill"></i>
        </h1>

        <Selector value={value} type={type}></Selector>
        
        
      </main>
    </div>
  )
}
