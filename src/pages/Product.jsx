import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 50px;
	display: flex;
`;
const ImgContainer = styled.div`
	flex: 1;
	align-items: center;
	justify-content: center;
`;
const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
`;
const Title = styled.h1`
	font-weight: 200;
`;
const Desc = styled.p`
	margin: 20px 0px;
`;
const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
`;
const FilterContainer = styled.div`
	width: 50%;
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
`;

const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0px 5px;
	cursor: pointer;
`;
const FilterSizeOption = styled.option``;
const FilterSize = styled.select``;
const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;
const AddContainer = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;

const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`;

const Button = styled.button`
	padding: 15px;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	font-weight: 500;
	&:hover {
		background-color: #f8f4f4;
	}
`;

const Product = () => {
	return (
		<Container>
			<Navbar></Navbar>
			<Announcement></Announcement>
			<Wrapper>
				<ImgContainer>
					<Image src="https://i.ibb.co/5Kmg9QK/Background-25.png"></Image>
				</ImgContainer>
				<InfoContainer>
					<Title>Banana</Title>
					<Desc>this is our one of the best item.</Desc>
					<Price>$10</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>ITEMS</FilterTitle>
							<FilterColor items="vegetable" />
							<FilterColor items="Fish" />
							<FilterColor items="Fruits" />
							<FilterColor items="Green Vegetable" />
							<FilterColor items="Flower" />
						</Filter>
						<Filter>
							<FilterTitle>PRICE</FilterTitle>
							<FilterSize>
								<FilterSizeOption>$10</FilterSizeOption>
								<FilterSizeOption>$5</FilterSizeOption>
								<FilterSizeOption>$6</FilterSizeOption>
								<FilterSizeOption>$3</FilterSizeOption>
								<FilterSizeOption>$2</FilterSizeOption>
								<FilterSizeOption>$8</FilterSizeOption>
								<FilterSizeOption>$4</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter></Newsletter>
			<Footer></Footer>
		</Container>
	);
};

export default Product;
