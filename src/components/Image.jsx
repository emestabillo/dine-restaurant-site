import React from "react";
import PropTypes from "prop-types";

const Image = (props) => {
	const { src, devices, sizes, alt } = props;
	const [fileName, fileType] = src.split(".");
	const srcSetGroup = devices.map(({ device, range }) => {
		return `${fileName}-${device}.${fileType} ${range}`;
	});
	const srcSet = srcSetGroup.join(", ");
	return <img srcSet={srcSet} sizes={sizes} src={src} alt={alt} />;
};

Image.proptype = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	sizes: PropTypes.array.isRequired,
	devices: PropTypes.array.isRequired,
};

export default Image;
