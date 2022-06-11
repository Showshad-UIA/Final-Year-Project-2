import React from "react";

import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``;
const Title = styled.h1`
	margin: 20px;
`;
const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Filter = styled.div`
	margin: 20px;
`;
const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
`;
const Select = styled.select``;
const Option = styled.option``;

const ProductList = () => {
	return (
		<Container>
			<Announcement></Announcement>
			<Navbar></Navbar>

			<Title>Items</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>

					<Select>
						<Option disabled selected>
							price
						</Option>
						<Option>Fish</Option>
						<Option>Vegetable</Option>
						<Option>Fruits</Option>
						<Option>Flower</Option>
						<Option>Green Vegetable</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Price
						</Option>
						<Option>$10</Option>
						<Option>$5</Option>
						<Option>$3</Option>
						<Option>$15</Option>
						<Option>$4</Option>
						<Option>$2</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
				</Filter>
			</FilterContainer>
			<Products></Products>
			<Newsletter></Newsletter>
		</Container>
	);
};

export default ProductList;
