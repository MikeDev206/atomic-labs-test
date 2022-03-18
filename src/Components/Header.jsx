import React from 'react'
import logo from '../assets/icons/atomic-labs-logo.png';



export default function Header() {
	return (
		<>
			<header className="navigation-logo">
				<img
					src={logo}
					alt="atomic-labs-logo"
				/>
			</header>
		</>
	);
}
