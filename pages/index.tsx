import type { NextPage } from "next";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CustomCarousel } from "../components/ui/carousel/CustomCarousel";
import { Query } from "../generated";
import { GetStaticProps } from "next";
import { gql } from "@apollo/client";
import client from "../graphql/apolloNext";
import { MainLayout } from "../components/ui";

type Props = {
	mainData: Query | undefined;
};

const Home: NextPage<Props> = ({ mainData }) => {
	// const data = useQuery(UserDocument)

	// console.log(data)

	// const count = useSelector((state: RootState) => state.counter.value)

	// const hellow = useSelector((state: RootState) => state.hellow.hellow)

	// const dispatch = useDispatch()

	return (
		<MainLayout
			title={mainData?.main?.data?.attributes?.titulo || "Main Page"}
			footerData={mainData?.main?.data?.attributes?.pieDePagina}
			pageDescription="Sushi Page"
		>
			<CustomCarousel vHeigth={"100vh"} data={mainData} />
		</MainLayout>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { data } = await client.query({
		query: gql`
			query {
				main {
					data {
						id
						attributes {
							titulo
							banner {
								id
								descripcion
								preTitulo
								titulo
								imagen {
									data {
										attributes {
											url
										}
									}
								}
								subDescripcion
								primerBoton
								segundoBoton
								descripcionImagen
							}
							pieDePagina {
								id
								imagenLogo {
									data {
										id
										attributes {
											name
											url
										}
									}
								}
								descripcion
								columnaLinks {
									id
									titulo
									link {
										id
										nombre
										enlaceExterno
										url
										pagina {
											data {
												id
												attributes {
													titulo
													cuerpo
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		`,
	});

	return {
		props: {
			mainData: data,
		},
	};
};
