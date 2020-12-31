import React from "react";
import imgPlaceSm from "../images/homepage/enjoyable-place-mobile.jpg";
import imgPlaceMd from "../images/homepage/enjoyable-place-tablet.jpg";
import imgPlaceLg from "../images/homepage/enjoyable-place-desktop.jpg";
import imgLocalSm from "../images/homepage/locally-sourced-mobile.jpg";
import imgLocalMd from "../images/homepage/locally-sourced-tablet.jpg";
import imgLocalLg from "../images/homepage/locally-sourced-desktop.jpg";

export default function About() {
	return (
		<section className="about">
			<div className="container">
				<div className="about__item">
					<div className="about__img">
						<img
							// srcSet={`${imgSm} 480w, ${imgMd} 573w, ${imgLg} 540w`}
							// sizes="(max-width: 480px) 327px,
							// (max-width: 800px) 573px, 540px"
							// sizes="(max-width: 480px) 90vw, (max-width: 900px) 60vw, 540px"
							// sizes="(min-width: 992px) 573px, (min-width: 768px) 573px, 327px"
							//   sizes="(max-width: 499px) 480px,
							// (max-width: 992px)  500px, 991px"
							// src={imgSm}
							// alt="enjoyable place"
							srcSet={`${imgPlaceSm} 480w, ${imgPlaceMd} 500w, ${imgPlaceLg} 992w`}
							sizes="(max-width: 499px) 480px,
            (max-width: 992px) 500px, 991px"
							src={imgPlaceLg}
							alt="enjoyable place"
						/>
					</div>
					<div className="about__text">
						<h2>Enjoyable place for all the family</h2>
						<p>
							Our relaxed surroundings make dining with us a great experience
							for everyone. We can even arrange a tour of the farm before your
							meal.
						</p>
					</div>
				</div>

				<div className="about__item">
					<div className="about__img">
						<img
							srcSet={`${imgLocalSm} 480w, ${imgLocalMd} 500w, ${imgLocalLg} 992w`}
							sizes="(max-width: 499px) 480px,
            (max-width: 992px) 500px, 991px"
							src={imgLocalLg}
							alt="locally sourced"
						/>
					</div>
					<div className="about__text">
						<h2>The most locally sourced food</h2>
						<p>
							All our ingredients come directly from our farm or local fishery.
							So you can be sure that you’re eating the freshest, most
							sustainable food.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
