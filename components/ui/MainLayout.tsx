import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { FC, ReactNode } from 'react'
import Navbar from './navbar/Navbar'
interface Props {
  title: string
  pageDescription: string
  imageFullUrl?: string
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name='description' content={pageDescription} />

        <meta name='og:title' content={title} />
        <meta name='og:description' content={pageDescription} />

        {imageFullUrl && <meta name='og:image' content={imageFullUrl} />}
      </Head>
      <Box
        minH='100vh'
        backgroundImage={'url(/assets/banner.jpg)'}
        backgroundPosition='center'
        backgroundSize={'cover'}
      >
        <Box as='header'>
          <Navbar />
        </Box>
        <Box width={'90%'} margin='0 auto' padding='30px 0' as='main'>
          {children}
        </Box>
      </Box>

      <footer>{/* TODO: mi custom footer */}</footer>
    </>
  )
}
