import React from "react";
import lilCheckmark from "../assets/icons/ic_check_tiny.png";


export default function ComparisonTable() {
	return (
		<>
			<div className="comparison-table table-responsive">
				<table className="table align-middle bg-light">
					<thead>
						<tr>
							<th>CARACTERÍSTICAS</th>
							<th>OTROS</th>
							<th className="table-secondary">
								<strong>ATOMIC</strong>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Equipo inclusivo, honesto y auténtico</td>
							<td>
								<img
									src={lilCheckmark}
									alt="lil-checkmark"
								/>
							</td>
							<td className="table-secondary">
								<img
									src={lilCheckmark}
									alt="lil-checkmark"
								/>
							</td>
						</tr>
						<tr>
							<td>Puntualidad es nuestro segundo nombre</td>
							<td>
								<img
									src={lilCheckmark}
									alt="lil-checkmark"
								/>
							</td>
							<td className="table-secondary">
								<img
									src={lilCheckmark}
									alt="lil-checkmark"
								/>
							</td>
						</tr>
						<tr>
							<td>Siempre innovamos en nuestros productos</td>
							<td>
								<img
									src={lilCheckmark}
									alt="lil-checkmark"
								/>
							</td>
							<td className="table-secondary">
								<img
									src={lilCheckmark}
									alt="lil-checkmark"
								/>
							</td>
						</tr>
						<tr>
							<td>Te ayudamos a crecer e implementar nuevos conocimientos</td>
							<td></td>
							<td className="table-secondary">
								<img
									src={lilCheckmark}
									alt="lil-checkmark"
								/>
							</td>
						</tr>
						<tr>
							<td>Nos preocupamos por tu bienestar</td>
							<td></td>
							<td className="table-secondary">
								<img
									src={lilCheckmark}
									alt="lil-checkmark"
								/>
							</td>
						</tr>
						<tr>
							<td>El respeto es una parte fundamental</td>
							<td></td>
							<td className="table-secondary">
								<img
									src={lilCheckmark}
									alt="lil-checkmark"
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}
