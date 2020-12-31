import React from "react";
import Image from "components/Image";

console.log(process.env.PUBLIC_URL.toString(), "---");
function App() {
	const staticUrl = process.env.PUBLIC_URL.toString() + "/static";
	// the file without a device version will be used as the default picture
	const src = `${staticUrl}/imgs/homepage/enjoyable-place.jpg`;
	const devices = [
		{
			device: "mobile",
			range: "480w",
		},
		{
			device: "tablet",
			range: "500w",
		},
		{
			device: "desktop",
			range: "992w",
		},
	];
	const sizes = `(max-width: 499px) 480px,
            (max-width: 992px) 500px, 991px`;

	return <Image src={src} alt="testing" devices={devices} sizes={sizes} />;
}

export default App;
