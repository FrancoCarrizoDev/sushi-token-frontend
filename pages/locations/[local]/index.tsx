import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { MainLayout } from '../../../components/ui'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
interface Props {
  local: string
}

const MenuIndex: NextPage<Props> = ({ local }) => {
  console.log(local)
  return (
    <MainLayout
      title={`Bienvenido a ${local}`}
      pageDescription={`Todo acerca de nuestro tocal ${local}`}
    >
      <Carousel
        showStatus={false}
        swipeable={false}
        infiniteLoop
        transitionTime={1000}
        interval={10000}
      >
        <Box minH={'40vh'}>
          <Image src={'/assets/banner2.jpg'} alt='image1' layout='fill' objectFit='cover' />

          <Box
            position={'relative'}
            paddingTop={{ base: '100px' }}
            width={{ base: '90%', lg: '80%', '2xl': '70%' }}
            margin='0 auto'
            fontWeight={'600'}
          >
            <Text
              fontSize={{ base: '4xl' }}
              color='white'
              textAlign={{ base: 'center', md: 'start' }}
            >
              Cerro de las rosas
            </Text>
            <Text
              fontSize={{ base: '5xl' }}
              color='white'
              textAlign={{ base: 'center', md: 'start' }}
            >
              title
            </Text>
            <Text
              fontSize={{ base: 'large' }}
              fontWeight='normal'
              color='white'
              textAlign={{ base: 'center', md: 'start' }}
              maxW={{ base: 'auto', md: '50%' }}
            >
              summary
            </Text>
            <Stack
              spacing={4}
              direction='row'
              justify={{ base: 'center', md: 'start' }}
              marginTop={{ base: '3' }}
            >
              <Button color='black' backgroundColor='white' size='md' borderRadius={'2xl'}>
                LEAN MORE
              </Button>
              <Button
                backgroundColor='hsl(18deg 86% 48%)'
                color='white'
                size='md'
                borderRadius={'2xl'}
              >
                ORDER NOW
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box minH={'40vh'}>
          <Image src={'/assets/banner2.jpg'} alt='image1' layout='fill' objectFit='cover' />

          <Box
            position={'relative'}
            width={{ base: '90%', lg: '80%', '2xl': '70%' }}
            margin='0 auto'
            fontWeight={'600'}
          >
            <Text
              fontSize={{ base: '4xl' }}
              color='white'
              textAlign={{ base: 'center', md: 'start' }}
            >
              pretitle
            </Text>
            <Text
              fontSize={{ base: '5xl' }}
              color='white'
              textAlign={{ base: 'center', md: 'start' }}
            >
              title
            </Text>
            <Text
              fontSize={{ base: 'large' }}
              fontWeight='normal'
              color='white'
              textAlign={{ base: 'center', md: 'start' }}
              maxW={{ base: 'auto', md: '50%' }}
            >
              summary
            </Text>
            <Stack
              spacing={4}
              direction='row'
              justify={{ base: 'center', md: 'start' }}
              marginTop={{ base: '3' }}
            >
              <Button color='black' backgroundColor='white' size='md' borderRadius={'2xl'}>
                LEAN MORE
              </Button>
              <Button
                backgroundColor='hsl(18deg 86% 48%)'
                color='white'
                size='md'
                borderRadius={'2xl'}
              >
                ORDER NOW
              </Button>
            </Stack>
          </Box>
        </Box>
      </Carousel>
    </MainLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const localesSlugs = await [
    { params: { local: 'cerro-de-las-rosas' } },
    { params: { local: 'nueva-cordoba' } },
    { params: { local: 'barrio-jardin' } }
  ]

  return {
    paths: localesSlugs,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { local = '' } = params as { local: string }
  const product = await {}

  // if (!product)
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false
  //     }
  //   }

  return {
    props: {
      local
    },
    revalidate: 60 * 60 * 24
  }
}

export default MenuIndex
