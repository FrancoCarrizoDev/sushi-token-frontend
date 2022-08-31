import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { MainDocument } from '../../../graphql/main/main'
import { Query } from '../../../generated'
import { Stack, Button, Box, Text, Divider, Flex } from '@chakra-ui/react'
import { useQuery } from '@apollo/client'
import ChakraNextLink from '../ChakraNextLink'
import Image from 'next/image'
import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'

interface IMainBanner {
  image: string
  pretitle: string
  title: string
  summary: string
  buttonLabel: string
  description?: string
}

interface Props {
  items: IMainBanner[]
  vHeigth: string
  showDescription?: boolean
}

export const CustomCarousel: FC<Props> = ({
  items,
  vHeigth = '100vh',
  showDescription = true
}) => {
  const { data, loading } = useQuery<Query>(MainDocument)

  if (loading) {
    return <h1>Cargando...</h1>
  }

  return (
    <Carousel
      showStatus={false}
      swipeable={false}
      infiniteLoop
      transitionTime={1000}
      interval={10000}
    >
      {data?.main?.data?.attributes?.banner!.map((item) => (
        <Box minH={vHeigth} key={item?.id}>
          <Image
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.imagen.data?.attributes?.url}`}
            alt={item?.descripcionImagen || ''}
            layout='fill'
            objectFit='cover'
          />

          <Box
            position={'relative'}
            paddingTop={{
              base: '120px',
              lg: '180px',
              xl: '200px',
              '2xl': `${showDescription ? '250px' : '150px'}` // TODO falta todas las otras
            }}
            width={{ base: '90%', lg: '80%', '2xl': '70%' }}
            margin='0 auto'
            fontWeight={'600'}
          >
            <Text
              fontSize={{ base: '4xl' }}
              color='white'
              textAlign={{ base: 'center', md: 'start' }}
            >
              {item?.preTitulo}
            </Text>
            <Text
              fontSize={{ base: '5xl' }}
              color='white'
              textAlign={{ base: 'center', md: 'start' }}
            >
              {item?.titulo}
            </Text>
            <Box
              color='white'
              textAlign={{ base: 'center', md: 'start' }}
              maxW={{ base: 'auto', md: '50%' }}
              className='markdownStyles'
            >
              <ReactMarkdown>{item?.descripcion || ''}</ReactMarkdown>
            </Box>
            <Stack
              spacing={4}
              direction='row'
              justify={{ base: 'center', md: 'start' }}
              marginTop={{ base: '3' }}
            >
              <Button
                color='black'
                backgroundColor='white'
                size='md'
                borderRadius={'2xl'}
              >
                <ChakraNextLink
                  href={'/'}
                  fontSize={'md'}
                  fontWeight={'semibold'}
                  height={'100%'}
                  lineHeight={'40px'}
                >
                  LEAN MORE
                </ChakraNextLink>
              </Button>
              <Button
                backgroundColor='hsl(18deg 86% 48%)'
                color='white'
                size='md'
                borderRadius={'2xl'}
                _hover={{ backgroundColor: 'hsl(18deg 90% 55%)' }}
              >
                <ChakraNextLink
                  href={'/our-food'}
                  color='white'
                  fontSize={'md'}
                  fontWeight={'semibold'}
                  height={'100%'}
                  lineHeight={'40px'}
                >
                  ORDER NOW
                </ChakraNextLink>
              </Button>
            </Stack>
          </Box>
          {showDescription && (
            <>
              <Box
                display={{ base: 'block', md: 'none' }}
                className='legend'
                position='relative'
              >
                <Divider
                  orientation='horizontal'
                  height={'3px'}
                  backgroundColor='hsl(18deg 86% 48%)'
                  borderBottom={'0'}
                  position={'absolute'}
                  maxW={'94%'}
                />
                <Box paddingTop={2} className='markdownStyles'>
                  <ReactMarkdown>{item?.subDescripcion || ''}</ReactMarkdown>
                </Box>
                <Text fontSize={'md'}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
              </Box>
              <Box
                className='legend carousel-slider-lengend-fix '
                display={{ base: 'none', md: 'block' }}
              >
                <Flex justifyContent={'space-between'}>
                  {data?.main?.data?.attributes?.banner!.map((bannerDescription) => (
                    <Box key={bannerDescription?.id} position='relative' sx={{ flex: 1 }}>
                      <Divider
                        orientation='horizontal'
                        height={'3px'}
                        backgroundColor='hsl(18deg 86% 48%)'
                        borderBottom={'0'}
                        display={item?.id === bannerDescription?.id ? 'block' : 'none'}
                        position={'absolute'}
                        width='100%'
                      />
                      <Box paddingTop={2} className='markdownStyles'>
                        <ReactMarkdown>
                          {bannerDescription?.subDescripcion || ''}
                        </ReactMarkdown>
                      </Box>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </>
          )}
        </Box>
      ))}
    </Carousel>
  )
}
