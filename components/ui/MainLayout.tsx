import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { FC, ReactNode } from 'react'

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
      <Box minH='100vh' backgroundImage={'url(/assets/banner.jpg)'}>
        <nav>{/* <Navbar /> */}</nav>

        {/* <SideMenu /> */}

        <main>{children}</main>
      </Box>

      {/* Footer */}
      <footer>{/* TODO: mi custom footer */}</footer>
    </>
  )
}
