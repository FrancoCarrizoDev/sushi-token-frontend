import type { NextPage } from 'next'
import MainLayout from '../components/ui/layouts/MainLayout'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { CustomCarousel } from '../components/ui/carousel/CustomCarousel'

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

  return (
    <MainLayout title='Main Page' pageDescription='Suhi Page'>
      <CustomCarousel items={bannerInfo} vHeigth={'100vh'} />
    </MainLayout>
  )
}

export default Home
