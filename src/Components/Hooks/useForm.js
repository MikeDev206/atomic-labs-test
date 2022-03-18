import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
	const [form] = useState(initialForm);
	const [errors] = useState({});
	const [loading] = useState(false);
	const [response] = useState(null);

	const handleChange = (e) => {};

	const handleBlur = (e) => {};

	const handleSubmit = (e) => {};

	return (
		form, 
		errors, 
		loading, 
		response, 
		handleChange, 
		handleBlur, 
		handleSubmit
	);
};
