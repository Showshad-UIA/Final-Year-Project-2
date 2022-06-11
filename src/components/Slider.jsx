import React from "react";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	overflow: hidden;
	position: relative;
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;

	align-items: center;
	justify-content: center;
    background-color:#fff5757
	display: flex;
	border-radius: 50%;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	cursor: pointer;
	opacity: 0.5;
    z-index:2;
`;
const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(0vw);
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
`;
const Image = styled.img`
	flex: 1;
	height: 80%;
	margin-left: 150px;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 70px;
`;
const Desc = styled.p`
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 5px;
`;
const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
`;

const handleClick = (direction) => {};
const Slider = () => {
	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				<ArrowLeftOutlinedIcon></ArrowLeftOutlinedIcon>
			</Arrow>
			<Wrapper>
				<Slide bg="f5fafd">
					<ImgContainer>
						<Image src="https://i.ibb.co/xY9Hn24/Background-28.png" />
					</ImgContainer>
					<InfoContainer>
						<Title>Summer Sale</Title>
						<Desc>Hot sale in this summer</Desc>
						<Button>Shop Now</Button>
					</InfoContainer>
				</Slide>
				<Slide bg="fbf0f4">
					<ImgContainer>
						<Image src="https://i.ibb.co/xY9Hn24/Background-28.png" />
					</ImgContainer>
					<InfoContainer>
						<Title>Summer Sale</Title>
						<Desc>Hot sale in this summer</Desc>
						<Button>Shop Now</Button>
					</InfoContainer>
				</Slide>
				<Slide bg="fcf1ed">
					<ImgContainer>
						<Image src="https://i.ibb.co/xY9Hn24/Background-28.png" />
					</ImgContainer>
					<InfoContainer>
						<Title>Summer Sale</Title>
						<Desc>Hot sale in this summer</Desc>
						<Button>Shop Now</Button>
					</InfoContainer>
				</Slide>
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick("right")}>
				<ArrowRightOutlinedIcon></ArrowRightOutlinedIcon>
			</Arrow>
		</Container>
	);
};

export default Slider;
