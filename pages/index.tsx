import { useQuery } from '@apollo/client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../features/counter/counterSlice'
import { UserDocument } from '../generated'
import { RootState } from '../store/store'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { data, error, loading } = useQuery(UserDocument)

  const count = useSelector((state: RootState) => state.counter.value)
  console.log(count)
  const dispatch = useDispatch()
  console.log(data)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div>
          <div>
            <button aria-label='Increment value' onClick={() => dispatch(increment())}>
              Increment
            </button>
            <span>{count}</span>
            <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
              Decrement
            </button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
