import React from "react";

import Send from "@mui/icons-material/Send";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.div``;
const Desc = styled.div``;
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

const Newsletter = () => {
	return (
		<Container>
			<Title></Title>
			<Desc></Desc>
			<InputContainer>
				<Input></Input>
				<Button>
					<Send></Send>
				</Button>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;
