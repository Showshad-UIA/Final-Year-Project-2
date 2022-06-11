import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
	return (
		<div className="container">
			<Announcement></Announcement>
			<Navbar></Navbar>
			<Slider></Slider>
		</div>
	);
};

export default Home;
