import { Box, Flex, Heading } from '@chakra-ui/react'
import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { Navbar } from './Navbar'
import { BiRestaurant } from 'react-icons/bi'
import WithSubnavigation from './NavbarPrueba'
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
        <WithSubnavigation />
        <Box width={'90%'} margin='0 auto' padding='30px 0' as='header'>
          <main>{children}</main>
        </Box>
      </Box>

      <footer>{/* TODO: mi custom footer */}</footer>
    </>
  )
}

/*

 <Heading
                as='h1'
                size='xl'
                color={'white'}
                fontWeight='600'
                display={'flex'}
                alignItems='center'
              >
                <Box
                  as='span'
                  padding={2}
                  backgroundColor='hsl(18deg 86% 48%)'
                  borderRadius={'full'}
                  marginRight={2}
                >
                  <BiRestaurant size={'30px'} />
                </Box>{' '}
                SushiToken
              </Heading>
*/
