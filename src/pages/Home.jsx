import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
	return (
		<div className="container">
			<Announcement></Announcement>
			<Navbar></Navbar>
			<Slider></Slider>
			<Categories></Categories>
			<Products></Products>
			<Newsletter></Newsletter>
			<Footer></Footer>
		</div>
	);
};

export default Home;
