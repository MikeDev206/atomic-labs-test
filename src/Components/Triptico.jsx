import React from "react";
import TripCard from "./TripCard";

import image1 from "../assets/img/Group 4035.png";
import image2 from "../assets/img/Group 4036.png";
import image3 from "../assets/img/Group 4037.png";

const cards = [
	{
		id:1,
		image: image1,
		title: 'Explora',
		bullets: [
			'Innovación y creación tecnológica',
			'UI/UX',
			'Innovación'
		],
	},
	{
		id:2,
		image: image2,
		title: 'Imagina',
		bullets: [
			'Estrategia Digital',
			'Big Data & Analysis',
			'Consultoria Tecnológica',
			'Reducción de costos TI'
		],
	},
	{
		id:3,
		image: image3,
		title: 'Conquista',
		bullets: [
			'Desarrollo tecnológico a la medida',
			'Ciberseguridad',
			'Servicios de la Nube'
		]
	}
]


export default function Triptico() {
	console.log(cards)
	return (
		<div className="triptico">
			<div className="row">
				{
					cards.map(card => (
						<div className="col-sm-12 col-md-4" key={card.id}>
							<TripCard 
								title={card.title} 
								imageSource={card.image} 
								cardList={card.bullets}
								/>
						</div>
					) )
				}
			</div>
		</div>
	);
}
