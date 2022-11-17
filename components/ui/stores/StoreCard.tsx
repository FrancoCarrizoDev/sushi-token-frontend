import {
	Badge,
	Button,
	Center,
	Flex,
	Heading,
	Image,
	Link,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { LocalEntity } from "../../../generated";
import { Social } from "../social/Social";

interface Props {
	local: LocalEntity;
}

export const StoreCard: FC<Props> = ({ local }) => {
	const router = useRouter();

	const goToLocal = () => {
		router.push(`/locations/${local.attributes?.url!}`);
	};

	const goToMenuLocal = () => {
		router.push(`/locations/${local.attributes?.url!}/menu`);
	};

	return (
		<Center py={6}>
			<Stack
				borderWidth="1px"
				borderRadius="lg"
				w={{ sm: "100%", lg: "530px", xl: "540px" }}
				height={{ sm: "476px", md: "20rem" }}
				direction={{ base: "column", md: "row" }}
				bg={useColorModeValue("white", "gray.900")}
				boxShadow={"2xl"}
				padding={4}
			>
				<Flex flex={1} bg="blue.200">
					<Image
						objectFit="cover"
						boxSize="100%"
						src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${local.attributes?.imagenes?.data[0].attributes?.url}`}
						alt=""
					/>
				</Flex>
				<Stack
					flex={1}
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					p={1}
					pt={2}
				>
					<Heading
						fontSize={"2xl"}
						fontFamily={"body"}
						textAlign="center"
						color="#333"
					>
						{local.attributes?.nombre}
					</Heading>
					<Flex w="100%" mb={4} justifyContent="center">
						{local.attributes?.redesSociales?.map((social) => (
							<Social
								social={social}
								key={"redSocial-" + social?.id}
							/>
						))}
					</Flex>

					<Text
						textAlign={"center"}
						color={useColorModeValue("gray.700", "gray.400")}
						px={3}
					>
						Actress, musician, songwriter and artist. PM for work
						inquires or
						<Link href={"#"} color={"blue.400"}>
							#tag
						</Link>
						me in your posts
					</Text>
					<Stack
						align={"center"}
						justify={"center"}
						direction={"row"}
						mt={6}
					>
						{local.attributes?.tags?.map((tag) => (
							<Badge
								px={2}
								py={1}
								bg={"blue.50"}
								fontWeight={"400"}
								key={`tags-${tag?.id}`}
							>
								#{tag?.tag}
							</Badge>
						))}
					</Stack>

					<Stack
						width={"100%"}
						mt={"2rem"}
						direction={"row"}
						padding={2}
						justifyContent={"space-between"}
						alignItems={"center"}
					>
						<Button
							flex={1}
							fontSize={"sm"}
							rounded={"full"}
							_focus={{
								bg: "gray.200",
							}}
							onClick={goToLocal}
						>
							See More
						</Button>
						<Button
							flex={1}
							fontSize={"sm"}
							rounded={"full"}
							bg={"blue.400"}
							color={"white"}
							boxShadow={
								"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
							}
							_hover={{
								bg: "blue.500",
							}}
							_focus={{
								bg: "blue.500",
							}}
							onClick={goToMenuLocal}
						>
							Show Menu
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Center>
	);
};
