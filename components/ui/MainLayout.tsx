import { Box, Fade, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { FC, memo, ReactNode, useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'

interface Props {
  title: string
  pageDescription: string
  imageFullUrl?: string
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name='description' content={pageDescription} />

        <meta name='og:title' content={title} />
        <meta name='og:description' content={pageDescription} />

        {imageFullUrl && <meta name='og:image' content={imageFullUrl} />}
      </Head>

      <Box as='header' position={'fixed'} top='0' width={'100%'}>
        <Navbar />
      </Box>

      <Box as='main'>{children}</Box>

      <footer>{/* TODO: mi custom footer */}</footer>
    </>
  )
}

export default memo(MainLayout)
