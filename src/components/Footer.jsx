import React from "react";
import styled from "styled-components";

import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import WhatsApp from "@mui/icons-material/WhatsApp";
import AddLocationAlt from "@mui/icons-material/AddLocationAlt";
import LocalPhone from "@mui/icons-material/LocalPhone";
import MailOutline from "@mui/icons-material/MailOutline";

const Container = styled.div`
	display: flex;
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;
const Right = styled.div`
	flex: 1;
	padding: 20px;
`;
const Center = styled.div`
	flex: 1;
	padding: 20px;
`;
const Title = styled.h3`
	margin-bottom: 30px;
`;
const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;
const Logo = styled.div`
	flex: 1;
`;
const Desc = styled.p`
	flex: 1;
	margin: 20px 0px;
`;
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;
const SocialContainer = styled.div`
	display: flex;
`;
const ContactItem = styled.div`
	margin-bottom: 20px;
	align-items: center;
	display: flex;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>IIUM FRESH ITEM SERVICE</Logo>
				<Desc>Stay time with us!</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<Facebook></Facebook>
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram></Instagram>
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter></Twitter>
					</SocialIcon>
					<SocialIcon color="E60023">
						<WhatsApp></WhatsApp>
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>About</ListItem>
					<ListItem>Product</ListItem>
					<ListItem>B40</ListItem>
					<ListItem>Blog</ListItem>
				</List>
			</Center>
			<Right>
				<Title></Title>
				<ContactItem>
					<AddLocationAlt style={{ marginRight: "10px" }}></AddLocationAlt>
					SHAH MOSQUE, GOMBAK,IIUM
				</ContactItem>
				<ContactItem>
					<LocalPhone style={{ marginRight: "10px" }}></LocalPhone> +6012345678
				</ContactItem>
				<ContactItem>
					{" "}
					<MailOutline style={{ marginRight: "10px" }}></MailOutline>{" "}
					Contact@iium.com
				</ContactItem>
			</Right>
		</Container>
	);
};

export default Footer;
