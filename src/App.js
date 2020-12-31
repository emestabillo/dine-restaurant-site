import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Form from "./components/form/Form";
// import Hero from "./components/Hero";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Footer from "./components/Footer";
import "./styles/main.scss";
import Image from "./components/Image";

console.log(process.env.PUBLIC_URL.toString(), "---");
function App() {
	const staticUrl = process.env.PUBLIC_URL.toString() + "/static";
	const src = `${staticUrl}/imgs/homepage/chocolate-mobile.jpg`;
	return <Image src={src} alt="testing" />;
}

export default App;
