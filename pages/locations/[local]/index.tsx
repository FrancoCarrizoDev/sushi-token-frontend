import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { MainLayout } from '../../../components/ui'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import LocationLayout from '../../../components/ui/layouts/LocationLayout'
import { CustomCarousel } from '../../../components/ui/carousel/CustomCarousel'
interface Props {
  local: string
  items: IMainBanner[]
  vHeigth: string
}

interface IMainBanner {
  image: string
  pretitle: string
  title: string
  summary: string
  buttonLabel: string
}

const items: IMainBanner[] = [
  {
    pretitle: 'Bienvenido al local',
    title: 'Cerro de las rosas',
    buttonLabel: 'Order Now',
    image: '/assets/banner2.jpg',
    summary: 'Confort, tranquilidad, belleza y elegancia...'
  }
]

const MenuIndex: NextPage<Props> = ({ local, vHeigth }) => {
  console.log(local)
  return (
    <LocationLayout
      title={`Bienvenido a ${local}`}
      pageDescription={`Todo acerca de nuestro tocal ${local}`}
    >
      <CustomCarousel items={items} vHeigth={'50vh'} showDescription={false} />
    </LocationLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const localesSlugs = await [
    { params: { local: 'cerro-de-las-rosas' } },
    { params: { local: 'locations/nueva-cordoba' } },
    { params: { local: 'locations/barrio-jardin' } }
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
