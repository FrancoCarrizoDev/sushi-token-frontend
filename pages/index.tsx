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

	console.log({ mainData });

	return (
		<MainLayout
			pageTitle={mainData?.main?.data?.attributes?.titulo || "Main Page"}
			footerData={mainData?.main?.data?.attributes?.pieDePagina}
			SEO={mainData?.main?.data?.attributes?.SEO}
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
							listaMenu {
								... on ComponentGeneralLink {
									nombre
									enlaceExterno
									url
									id
									pagina {
										data {
											attributes {
												url
											}
										}
									}
									local {
										data {
											attributes {
												url
											}
										}
									}
								}
								... on ComponentGeneralMultipleLink {
									id
									Link {
										pagina {
											data {
												attributes {
													url
												}
											}
										}
										local {
											data {
												attributes {
													url
												}
											}
										}
									}
									etiqueta
								}
							}
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
							SEO {
								id
								title
								keywords
								description
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
