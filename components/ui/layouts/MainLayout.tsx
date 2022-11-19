import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { FC, ReactNode } from "react";
import {
	ComponentGeneralFooter,
	ComponentGeneralSeo,
	Maybe,
} from "../../../generated";
import { IMenuItem } from "../../../interfaces";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

interface Props {
	pageTitle: string;
	SEO: Maybe<ComponentGeneralSeo | undefined>;
	footerData?: Maybe<ComponentGeneralFooter | undefined>;
	imageFullUrl?: string;
	children: ReactNode;
}

const MENU: IMenuItem[] = [
	{
		label: "Inicio",
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
	pageTitle,
	imageFullUrl,
	footerData,
	SEO,
}) => {
	return (
		<>
			<Head>
				<title>{SEO?.title!}</title>
				<meta property="keywords" content={SEO?.keywords!} />
				<meta name="description" content={SEO?.description!} />

				<meta name="og:title" content={SEO?.title!} />
				<meta property="og:keywords" content={SEO?.keywords!} />
				<meta name="og:description" content={SEO?.description!} />

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
					<Navbar menu={MENU} title={"SushiToken"} />
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
