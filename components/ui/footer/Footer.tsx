import { ReactNode } from 'react'

import { Box, Container, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { MainFooter } from '../../../graphql/main'
import { useQuery } from '@apollo/client'
import { Query } from '../../../generated'
import Image from 'next/image'

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  const { data, loading } = useQuery<Query>(MainFooter)

  console.log(data)

  if (loading) {
    return <h1>Cargando...</h1>
  }

  return (
    <Box bg={'gray.50'} color={'gray.700'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box sx={{ margin: '0 auto' }}>
              <Image
                src={
                  `${process.env.NEXT_PUBLIC_BACKEND_URL}${data?.main?.data?.attributes?.pieDePagina?.imagenLogo?.data?.attributes?.url}` ||
                  ''
                }
                width='200px'
                height='100px'
                layout='fixed'
                alt={
                  data?.main?.data?.attributes?.pieDePagina?.imagenLogo?.data?.attributes
                    ?.name || ''
                }
              />
            </Box>
            <Text fontSize={'sm'}>
              {data?.main?.data?.attributes?.pieDePagina?.descripcion}
            </Text>
          </Stack>
          {data?.main?.data?.attributes?.pieDePagina?.columnaLinks?.map((column) => (
            <Stack align={'flex-start'} key={column?.id}>
              <ListHeader>{column?.titulo}</ListHeader>
              {column?.link?.map((link) => (
                <Link href={link?.url!} key={link?.id} isExternal={link?.enlaceExterno!}>
                  {link?.nombre}
                </Link>
              ))}
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
