import React from "react";
import PropTypes from "prop-types";

const devices = ["mobile", "tablet", "desktop"];
const Image = (props) => {
	const { src, srcArray = [], sizes = [], alt } = props;
	const [fileName, fileType] = src.split(".");
	console.log(fileName, fileType);
	console.log(src.split("."), fileName, fileType);

	return (
		<picture>
			<img src={src} alt={alt} />
		</picture>
	);
};

Image.proptype = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	srcArray: PropTypes.array,
	sizes: PropTypes.array,
};

export default Image;
