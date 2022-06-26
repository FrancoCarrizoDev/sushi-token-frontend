import { useQuery } from '@apollo/client'
import { Button, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice'
import { greeting } from '../features/hellow/hellowSlice'
import { UserDocument } from '../generated'
import { RootState } from '../store/store'
import styles from '../styles/Home.module.css'
import { Input } from '@chakra-ui/react'
import { MainLayout } from '../components/ui'
const Home: NextPage = () => {
  // const { data, error, loading } = useQuery(UserDocument)

  // const count = useSelector((state: RootState) => state.counter.value)

  // const hellow = useSelector((state: RootState) => state.hellow.hellow)

  // const dispatch = useDispatch()

  return (
    <MainLayout title='Main Page' pageDescription='Suhi Page'>
      <h1>Hola Mundo!</h1>
    </MainLayout>
  )
}

export default Home
