import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { FC, ReactNode } from "react";
import { ComponentGeneralFooter, Maybe } from "../../../generated";
import { IMenuItem } from "../../../interfaces";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

interface Props {
	title: string;
	footerData?: Maybe<ComponentGeneralFooter | undefined>;
	pageDescription: string;
	imageFullUrl?: string;
	children: ReactNode;
}

const MENU: IMenuItem[] = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Carta",
		href: "/carta",
	},
	{
		label: "Galería",
		href: "/gallery",
	},
	{
		label: "Locales",
		href: "/locations",
	},
	{
		label: "Reservar",
		href: "/reserve",
	},
];

const MainLayout: FC<Props> = ({
	children,
	title,
	pageDescription,
	imageFullUrl,
	footerData,
}) => {
	console.clear();
	console.log({ footerData });
	return (
		<>
			<Head>
				<title>{title}</title>

				<meta name="description" content={pageDescription} />

				<meta name="og:title" content={title} />
				<meta name="og:description" content={pageDescription} />

				{imageFullUrl && (
					<meta name="og:image" content={imageFullUrl} />
				)}
			</Head>

			<Box minH={"100vh"} display="flex" flexDir="column">
				<Box
					as="header"
					position={"fixed"}
					top="0"
					width={"100%"}
					zIndex="1"
				>
					<Navbar menu={MENU} title={title} />
				</Box>

				<Box flex={1} as="main">
					{children}
				</Box>

				<Footer data={footerData} />
			</Box>
		</>
	);
};

export default MainLayout;
