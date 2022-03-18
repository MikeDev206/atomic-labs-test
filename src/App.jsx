import React from "react";

import Header from "./Components/Header";
import ButtonPartOf from "./Components/Buttons/ButtonPartOf";
import Triptico from "./Components/Triptico";
import ComparisonTable from "./Components/ComparisonTable";

import "./styles/index.scss";

const landingImages = require.context("./assets", true);

export default function App() {
	return (
		<>
			{/* hero section */}

			<main className="hero-section">
				<Header />
				<div className="hero-body">
					<div className="hero-img">
						<img
							src={landingImages(`./img/Group 4032.png`)}
							alt="hero-astronaut"
						/>
					</div>
					<div className="hero-text">
						<h1 className="section-title">
							Desarrolla todo <br />
							<span>tu POTENCIAL</span> <br />
							dentro del equipo <br />
							<span>ATOMIC</span>LABS
						</h1>
						<ButtonPartOf />
					</div>
				</div>
				<div className="scroll">
					<button>
						<img
							src={landingImages(`./icons/Group 4013.png`)}
							alt="scroll-down"
						/>
					</button>
					<p>Quiero saber más</p>
				</div>
			</main>

			{/* right-arm section */}

			<section className="right-arm">
				<h1 className="section-title">
					SOMOS EL BRAZO DERECHO <br />
					<span>DE LA TECNOLOGÍA</span>
				</h1>
				<Triptico />
			</section>

			{/* dream-job section */}

			<section className="dream-job">
				<h1 className="section-title">
					¡TE ENCANTARÁ <br />
					<span>TRABAJAR CON NOSOTROS!</span>
				</h1>
				<img src={landingImages(`./img/Group 4040.png`)} alt="dream-team" />
				<div className="process-dream-team">
					<p>
						Contratación <br /> remota
					</p>
					<img
						src={landingImages(`./icons/right-arrows.png`)}
						alt="right-arrow"
					/>
					<p>
						Entrevista con <br /> el área de RH
					</p>
					<img
						src={landingImages(`./icons/right-arrows.png`)}
						alt="right-arrow"
					/>
					<p>
						Prueba <br /> práctica
					</p>
					<img
						src={landingImages(`./icons/right-arrows.png`)}
						alt="right-arrow"
					/>
					<p>
						Entrevista <br /> técnica
					</p>
				</div>
				<ButtonPartOf />
			</section>

			{/* why-us section */}

			<section className="why-us">
				<h1 className="section-title">
					¿POR QUÉ <span>ATOMIC?</span>
				</h1>
				<div className="why-cards">
					<div className="why-card">
						<img
							className="img-title"
							src={landingImages(`./img/Group 4041.png`)}
							alt="designer-astronaut"
						/>
						<ul>
							<li>
								<img
									className="checkmarks"
									src={landingImages(`./icons/ic_check_tiny@2x.png`)}
									alt="checkmark"
								/>
								<p>Usamos las tecnologías más modernas.</p>
							</li>
							<li>
								<img
									className="checkmarks"
									src={landingImages(`./icons/ic_check_tiny@2x.png`)}
									alt="checkmark"
								/>
								<p>Innovamos y creamos proyectos retadores.</p>
							</li>
						</ul>
					</div>
					<div className="why-card">
						<img
							className="img-title"
							src={landingImages(`./img/Group 4042.png`)}
							alt="coder-astronaut"
						/>
						<ul>
							<li>
								<img
									className="checkmarks"
									src={landingImages(`./icons/ic_check_tiny@2x.png`)}
									alt="checkmark"
								/>
								<p>¡Trabajamos en equipo rumbo al éxito!</p>
							</li>
							<li>
								<img
									className="checkmarks"
									src={landingImages(`./icons/ic_check_tiny@2x.png`)}
									alt="checkmark"
								/>
								<p>No tenemos código de vestimenta.</p>
							</li>
						</ul>
					</div>
					<div className="why-card">
						<img
							className="img-title"
							src={landingImages(`./img/Group 4043.png`)}
							alt="tester-astronaut"
						/>
						<ul>
							<li>
								<img
									className="checkmarks"
									src={landingImages(`./icons/ic_check_tiny@2x.png`)}
									alt="checkmark"
								/>
								<p>Realizamos actividades para tu bienestar.</p>
							</li>
							<li>
								<img
									className="checkmarks"
									src={landingImages(`./icons/ic_check_tiny@2x.png`)}
									alt="checkmark"
								/>
								<p>¡Tenemos un parque frente a la oficina!</p>
							</li>
						</ul>
					</div>
				</div>

				{/* comparison table */}
				<ComparisonTable />

				<ButtonPartOf />
			</section>

			{/* footer section */}

			<footer className="footer-section">
				<div className="rights-reserved">
					<span>
						<strong>© 2020 AtomicLabs. Todos los derechos reservados.</strong>
					</span>
				</div>
				<div className="privacy">
					<a href="/">Aviso de privacidad</a>
					<div className="social">
						<img src={landingImages(`./social/linkedin.png`)} alt="linkedin" />
						<img src={landingImages(`./social/twitter.png`)} alt="linkedin" />
					</div>
				</div>
			</footer>
		</>
	);
}
