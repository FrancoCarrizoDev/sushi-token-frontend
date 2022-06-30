import { Flex, Box, Text, Button, Stack, Divider } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import MainLayout from '../components/ui/MainLayout'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
interface IMainBanner {
  image: string
  pretitle: string
  title: string
  summary: string
  buttonLabel: string
  description: string
}

const bannerInfo: IMainBanner[] = [
  {
    image: '/assets/banner.jpg',
    pretitle: 'YES WE HAVE',
    title: 'THE BEST FISH STEAK',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel consequuntur possimus eaque necessitatibus, laudantium rerum nobis laboriosam obcaecati.',
    buttonLabel: 'ORDER NOW',
    description: 'FISH STEAK'
  },
  {
    image: '/assets/banner2.jpg',
    pretitle: 'I GET UP',
    title: 'THE BEST SUSHI ROLL',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel consequuntur possimus eaque necessitatibus, laudantium rerum nobis laboriosam obcaecati.',
    buttonLabel: 'ORDER NOW',
    description: 'SUSHI ROLL'
  },
  {
    image: '/assets/banner3.jpg',
    pretitle: 'WHATEVER, ONLY',
    title: 'I LOVE SUSHI',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel consequuntur possimus eaque necessitatibus, laudantium rerum nobis laboriosam obcaecati.',
    buttonLabel: 'ORDER NOW',
    description: 'COMBINATEDS'
  }
]

const Home: NextPage = () => {
  // const { data, error, loading } = useQuery(UserDocument)

  // const count = useSelector((state: RootState) => state.counter.value)

  // const hellow = useSelector((state: RootState) => state.hellow.hellow)

  // const dispatch = useDispatch()

  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCount((prevCount) => (bannerInfo.length === prevCount + 1 ? 0 : prevCount + 1))
  //   }, 5000)

  //   return () => clearInterval(intervalId)
  // }, [count])

  return (
    <MainLayout title='Main Page' pageDescription='Suhi Page'>
      {/* <Box
        minH='100vh'
        backgroundImage={bannerInfo[count].image}
        backgroundPosition='center'
        backgroundSize={'cover'}
        paddingTop='60px'
      >
        <Box
          width={{ base: '90%', lg: '80%', '2xl': '70%' }}
          margin='0 auto'
          padding='30px 0'
          as='main'
        >
          <Text as='h1' fontSize={'3xl'} color='white'>
            Hola
          </Text>
        </Box>
      </Box> */}
      <Carousel
        showStatus={false}
        autoPlay
        swipeable={false}
        infiniteLoop
        transitionTime={1000}
        interval={10000}
      >
        {bannerInfo.map((banner) => (
          <Box minH={'100vh'} key={banner.image}>
            <Image src={banner.image} alt='image1' layout='fill' objectFit='cover' />

            <Box
              position={'relative'}
              paddingTop={{ base: '180px', md: '150px', '3xl': '400px' }}
              width={{ base: '90%', lg: '80%', '2xl': '70%' }}
              margin='0 auto'
              fontWeight={'600'}
            >
              <Text
                fontSize={{ base: '4xl' }}
                color='white'
                textAlign={{ base: 'center', md: 'start' }}
              >
                {banner.pretitle}
              </Text>
              <Text
                fontSize={{ base: '5xl' }}
                color='white'
                textAlign={{ base: 'center', md: 'start' }}
              >
                {banner.title}
              </Text>
              <Text
                fontSize={{ base: 'large' }}
                fontWeight='normal'
                color='white'
                textAlign={{ base: 'center', md: 'start' }}
                maxW={{ base: 'auto', md: '50%' }}
              >
                {banner.summary}
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
                {banner.description}
              </Text>
              <Text fontSize={'md'}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            </Box>
            <Box
              className='legend carousel-slider-lengend-fix '
              display={{ base: 'none', md: 'block' }}
            >
              <Flex justifyContent={'space-between'}>
                {bannerInfo.map((bannerDescription) => (
                  <Box key={bannerDescription.description} position='relative'>
                    <Divider
                      orientation='horizontal'
                      height={'3px'}
                      backgroundColor='hsl(18deg 86% 48%)'
                      borderBottom={'0'}
                      display={banner.image === bannerDescription.image ? 'block' : 'none'}
                      position={'absolute'}
                      width='100%'
                    />
                    <Text fontSize={'xl'} paddingTop={2}>
                      {bannerDescription.description}
                    </Text>
                    <Text fontSize={'md'}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Box>
          </Box>
        ))}
      </Carousel>
      <h1>Hola</h1>
    </MainLayout>
  )
}

export default Home
