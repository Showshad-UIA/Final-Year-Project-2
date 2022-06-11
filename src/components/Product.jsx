import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import styled from "styled-components";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined";

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	align-items: center;
	display: flex;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
`;
const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
`;
const Circle = styled.div`
	height: 200px;
	width: 200px;
	border-radius: 50%;
	background-color: white;
	position: absolute;
`;
const Image = styled.img`
	height: 75%;
	z-index: 2;
`;

const Icon = styled.div`
	width: 40px;
	width: 40px;
	border-radius: 50%;
	background-color: white;
	align-items: center;
	display: flex;
	justify-content: center;
	margin: 10px;
	transition:all 0.5s ease &:hover;

	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

const Product = ({ item }) => {
	return (
		<Container>
			<Circle> </Circle>
			<Image src={item.img}></Image>
			<Info>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
				<Icon>
					<SearchOutlined />
				</Icon>
				<Icon>
					<FavoriteOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
