import { Box, Fade, Text } from "@chakra-ui/react";
import Head from "next/head";
import { FC, memo, ReactNode, useEffect, useState } from "react";
import { IMenuItem } from "../../../interfaces";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

interface Props {
	title: string;
	pageDescription: string;
	imageFullUrl?: string;
	children: ReactNode;
}

const MENU: IMenuItem[] = [
	{
		label: "Ir al inicio",
		href: "/",
	},
	{
		label: "Hacer pedido",
		href: "/menu",
	},
	{
		label: "Galería",
		href: "/gallery",
	},
	{
		label: "Reservar",
		href: "/reserve",
	},
];

const LocationLayout: FC<Props> = ({
	children,
	title,
	pageDescription,
	imageFullUrl,
}) => {
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

			<Box
				as="header"
				position={"fixed"}
				top="0"
				width={"100%"}
				zIndex="1"
			>
				{/* <Navbar menu={MENU} /> */}
			</Box>

			<Box as="main">{children}</Box>

			{/* <Footer /> */}
		</>
	);
};

export default memo(LocationLayout);
