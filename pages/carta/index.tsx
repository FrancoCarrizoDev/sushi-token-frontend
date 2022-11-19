import {
	Box,
	Divider,
	Flex,
	FormControl,
	Input,
	Spinner,
	Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { MainLayout, StoreCard } from "../../components/ui";
import { GrCatalog } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";
import { gql } from "@apollo/client";
import { LocalEntity, Query } from "../../generated";
import { GetStaticProps } from "next";
import client from "../../graphql/apolloNext";
import useSearch from "../../hooks/useSearch";

type Locals = {
	locales: Array<LocalEntity>;
};

const Carta: NextPage<Locals> = ({ locales }) => {
	const { setFilter, storedFilter } = useSearch({ locales });

	return (
		<MainLayout
			pageTitle="Nuestros locales"
			pageDescription="Disfruta de las cartas de todos nuestros locales"
		>
			<Box
				paddingTop={{ base: "80px", md: "100px" }}
				width={{ base: "90%", lg: "80%", "2xl": "70%" }}
				margin={"0 auto"}
			>
				<Flex justify={"space-between"} flexDir="column" gap="10px">
					<Box w="100%">
						<Flex align="center" gap="5px">
							<Text
								as={"h1"}
								fontSize={"2xl"}
								fontWeight="600"
								color={"blackAlpha.800"}
							>
								Seleccione un local
							</Text>
							<GrCatalog display="inline" size="20px" />
						</Flex>

						<Divider />
					</Box>
					<FormControl>
						<Input
							size="sm"
							placeholder="Buscar..."
							borderRadius="md"
							variant="outline"
							onChange={(e) => setFilter(e.target.value)}
						/>
					</FormControl>
				</Flex>
				<Flex flexWrap="wrap" justify={"space-between"}>
					<AnimatePresence>
						{/* storedFilter.length === 0 */}
						{storedFilter.length === 0 ? (
							<Flex justify={"center"} paddingTop="50px" w="100%">
								<Spinner
									thickness="4px"
									speed="0.65s"
									emptyColor="gray.200"
									color="blue.500"
									size="xl"
								/>
							</Flex>
						) : (
							storedFilter.map((local) => (
								<motion.div
									key={local.attributes?.nombre}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									initial={{ opacity: 0 }}
									transition={{ delay: 0.2 }}
								>
									<StoreCard local={local} />
								</motion.div>
							))
						)}
					</AnimatePresence>
				</Flex>
			</Box>
		</MainLayout>
	);
};

export default Carta;

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { data } = await client.query<Query>({
		query: gql`
			query {
				locales {
					data {
						id
						attributes {
							nombre
							direccion
							telefono {
								id
								tipo
								numero
							}
							url
							imagenes {
								data {
									id
									attributes {
										name
										url
									}
								}
							}
							redesSociales {
								id
								url
								iframe
								nombre
							}
							tags {
								id
								tag
							}
						}
					}
				}
			}
		`,
	});

	if (!data.locales?.data || data.locales?.data.length === 0)
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};

	return {
		props: {
			locales: data.locales?.data,
		},
		revalidate: 60 * 60 * 24,
	};
};
