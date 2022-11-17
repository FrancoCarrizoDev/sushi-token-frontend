import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import LocationLayout from "../../../components/ui/layouts/LocationLayout";
import { CustomCarousel } from "../../../components/ui/carousel/CustomCarousel";
import { gql } from "@apollo/client";
import client from "../../../graphql/apolloNext";
import { Query } from "../../../generated";

interface Props {
	local: string;
	items: IMainBanner[];
	vHeigth: string;
	bannerByLocal: Query | undefined;
}

interface IMainBanner {
	image: string;
	pretitle: string;
	title: string;
	summary: string;
	buttonLabel: string;
}

const items: IMainBanner[] = [
	{
		pretitle: "Bienvenido al local",
		title: "Cerro de las rosas",
		buttonLabel: "Order Now",
		image: "/assets/banner2.jpg",
		summary: "Confort, tranquilidad, belleza y elegancia...",
	},
];

const MenuIndex: NextPage<Props> = ({ local, vHeigth, bannerByLocal }) => {
	return (
		<LocationLayout
			title={`Bienvenido a ${local}`}
			pageDescription={`Todo acerca de nuestro tocal ${local}`}
		>
			<CustomCarousel
				vHeigth={"50vh"}
				showDescription={false}
				data={bannerByLocal}
			/>
		</LocationLayout>
	);
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	const { data } = await client.query<Query>({
		query: gql`
			query Locals {
				locales {
					data {
						attributes {
							url
						}
					}
				}
			}
		`,
	});

	if (!data.locales?.data || data.locales?.data.length === 0) {
		return {
			paths: [],
			fallback: false,
		};
	}

	const localesSlugs = data.locales?.data.map((local) => ({
		params: {
			local: local.attributes?.url || "",
		},
	}));

	return {
		paths: localesSlugs,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { local = "" } = params as { local: string };
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
						}
					}
				}
			}
		`,
	});

	// if (!product)
	//   return {
	//     redirect: {
	//       destination: '/',
	//       permanent: false
	//     }
	//   }

	return {
		props: {
			local,
			bannerByLocal: data,
		},
		revalidate: 60 * 60 * 24,
	};
};

export default MenuIndex;
