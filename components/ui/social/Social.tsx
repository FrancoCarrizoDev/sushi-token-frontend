import { Box, Icon, IconButton, Link } from "@chakra-ui/react";
import { ComponentInterfazRedesSociales } from "../../../generated";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { VscError } from "react-icons/vsc";
import NextLink from "next/link";
import React, { FC } from "react";

type Props = {
	social: ComponentInterfazRedesSociales | null;
};

export const Social: FC<Props> = ({ social }) => {
	const SocialIcon = () => {
		if (social?.nombre === "instagram")
			return <Icon fontSize={"20px"} color="red.400" as={FaInstagram} />;
		if (social?.nombre === "facebook")
			return (
				<Icon fontSize={"20px"} color="facebook.500" as={FaFacebook} />
			);
		if (social?.nombre === "twitter")
			return (
				<Icon fontSize={"20px"} color="twitter.500" as={FaTwitter} />
			);
		return <Icon fontSize={"20px"} as={VscError} />;
	};

	return (
		<Box px="3">
			<NextLink href={"https://" + social?.url!} passHref>
				<Link isExternal>{SocialIcon()}</Link>
			</NextLink>
		</Box>
	);
};
