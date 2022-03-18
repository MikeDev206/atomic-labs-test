import React from "react";
import { useForm } from "../Hooks/useForm";
import Header from "../Header";
import ProgressBar from "../ProgressBar";

const initialForm = {};

const validationsForm = (form) => {};

const ContactForm = () => {
	const {
		form,
		errors,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit,
	} = useForm(initialForm, validationsForm);

	return (
		<>
			{/* Header */}
			<nav>
				<Header />
			</nav>

			{/* Pogress bar */}

			<section className="progress-bar">
				<ProgressBar />
			</section>

			<h1>Únete a nosotros</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="fname"
					placeholder="Ej. Juan"
					onBlur={handleBlur}
					onChange={handleChange}
					value={form.fname}
					required
				/>
				<input
					type="text"
					name="lname"
					placeholder="Ej. Martinez"
					onBlur={handleBlur}
					onChange={handleChange}
					value={form.lname}
					required
				/>
				<input
					type="tel"
					name="phone"
					placeholder="Ej. 555 123 2345"
					onBlur={handleBlur}
					onChange={handleChange}
					value={form.tel}
					required
				/>
				<input
					type="number"
					name="verification"
					placeholder="Codigo recibido"
					onBlur={handleBlur}
					onChange={handleChange}
					value={form.verification}
					maxLength="6"
					required
				/>
				<input
					type="submit"
					value="Enviar"
				/>
			</form>
		</>
	);
};

export default ContactForm;
