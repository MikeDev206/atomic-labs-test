import React from "react";
import PropTypes from "prop-types";

export default function TripCard({ title, imageSource, cardList }) {
	return (
		<>
			<div className="card">
				<img src={imageSource} alt="ideas-img" />
				<div className="lineas"></div>
				<h2 className="card-title">{title}</h2>
				<ul>
					{cardList.map((item) => (
						<li key={item.toString()}>{item}</li>
					))}
				</ul>
			</div>
		</>
	);
}

TripCard.propTypes = {
	title: PropTypes.string.isRequired,
	imageSource: PropTypes.string,
};
