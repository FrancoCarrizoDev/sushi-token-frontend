import { Stack, Button, Box, Text, Divider, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { FC } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import ChakraNextLink from '../ChakraNextLink'

interface IMainBanner {
  image: string
  pretitle: string
  title: string
  summary: string
  buttonLabel: string
  description: string
}

interface Props {
  items: IMainBanner[]
  vHeigth: string
}

export const CustomCarousel: FC<Props> = ({ items, vHeigth = '100vh' }) => {
  return (
    <Carousel
      showStatus={false}
      swipeable={false}
      infiniteLoop
      transitionTime={1000}
      interval={10000}
    >
      {items.map((item) => (
        <Box minH={vHeigth} key={item.image}>
          <Image src={item.image} alt='image1' layout='fill' objectFit='cover' />

          <Box
            position={'relative'}
            paddingTop={{ base: '120px', lg: '180px', xl: '200px', '2xl': '250px' }}
            width={{ base: '90%', lg: '80%', '2xl': '70%' }}
            margin='0 auto'
            fontWeight={'600'}
          >
            <Text
              fontSize={{ base: '4xl' }}
              color='white'
              textAlign={{ base: 'center', md: 'start' }}
            >
              {item.pretitle}
            </Text>
            <Text
              fontSize={{ base: '5xl' }}
              color='white'
              textAlign={{ base: 'center', md: 'start' }}
            >
              {item.title}
            </Text>
            <Text
              fontSize={{ base: 'large' }}
              fontWeight='normal'
              color='white'
              textAlign={{ base: 'center', md: 'start' }}
              maxW={{ base: 'auto', md: '50%' }}
            >
              {item.summary}
            </Text>
            <Stack
              spacing={4}
              direction='row'
              justify={{ base: 'center', md: 'start' }}
              marginTop={{ base: '3' }}
            >
              <Button color='black' backgroundColor='white' size='md' borderRadius={'2xl'}>
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
          <Box display={{ base: 'block', md: 'none' }} className='legend' position='relative'>
            <Divider
              orientation='horizontal'
              height={'3px'}
              backgroundColor='hsl(18deg 86% 48%)'
              borderBottom={'0'}
              position={'absolute'}
              maxW={'94%'}
            />
            <Text fontSize={'xl'} paddingTop={2}>
              {item.description}
            </Text>
            <Text fontSize={'md'}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          </Box>
          {items && (
            <Box
              className='legend carousel-slider-lengend-fix '
              display={{ base: 'none', md: 'block' }}
            >
              <Flex justifyContent={'space-between'}>
                {items.map((bannerDescription) => (
                  <Box key={bannerDescription.description} position='relative'>
                    <Divider
                      orientation='horizontal'
                      height={'3px'}
                      backgroundColor='hsl(18deg 86% 48%)'
                      borderBottom={'0'}
                      display={item.image === bannerDescription.image ? 'block' : 'none'}
                      position={'absolute'}
                      width='100%'
                    />
                    <Text fontSize={'xl'} paddingTop={2}>
                      {bannerDescription.description}
                    </Text>
                    <Text fontSize={'md'} padding={'0 10px'}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Box>
          )}
        </Box>
      ))}
    </Carousel>
  )
}
