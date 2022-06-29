import { Fade, Box, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import MainLayout from '../components/ui/MainLayout'

interface IMainBanner {
  image: string
  pretitle: string
  title: string
  summary: string
  buttonLabel: string
}

const bannerInfo: IMainBanner[] = [
  {
    image: 'url(/assets/banner.jpg)',
    pretitle: 'YES WE HAVE',
    title: 'THE BEST FISH STEAK',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel consequuntur possimus eaque necessitatibus, laudantium rerum nobis laboriosam obcaecati.',
    buttonLabel: 'ORDER NOW'
  },
  {
    image: 'url(/assets/banner2.jpg)',
    pretitle: 'I GET UP',
    title: 'THE BEST SUSHI ROLL',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel consequuntur possimus eaque necessitatibus, laudantium rerum nobis laboriosam obcaecati.',
    buttonLabel: 'ORDER NOW'
  }
]

const Home: NextPage = () => {
  // const { data, error, loading } = useQuery(UserDocument)

  // const count = useSelector((state: RootState) => state.counter.value)

  // const hellow = useSelector((state: RootState) => state.hellow.hellow)

  // const dispatch = useDispatch()

  const [count, setCount] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (bannerInfo.length === prevCount + 1 ? 0 : prevCount + 1))
    }, 5000)

    return () => clearInterval(intervalId)
  }, [count])

  return (
    <MainLayout title='Main Page' pageDescription='Suhi Page'>
      <Box
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
      </Box>
    </MainLayout>
  )
}

export default Home
