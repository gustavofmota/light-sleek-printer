import React, { useState } from 'react'

function FormPopup({ service }) {
	const [formData, setFormData] = useState({
		email: '',
		subject: '',
		message: '',
		file: null,
		service,
	})

	const handleChange = (e) => {
		const { name, value, files } = e.target
		console.log(name, value, files)
		setFormData((prevState) => ({
			...prevState,
			[name]: files ? files[0] : value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		// Prepare form data for sending, e.g., via FormData if you're uploading a file
		const dataToSend = new FormData()
		Object.keys(formData).forEach((key) => {
			dataToSend.append(key, formData[key])
		})

		// Here you would typically send the form data to a server
		console.log(JSON.stringify(formData))
		fetch('/api/data', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(formData),
		})

		// Reset the form if needed
		setFormData({
			email: '',
			subject: '',
			message: '',
			file: null,
			service: '',
		})
	}

	return (
		<>
			<h1>Contact Us</h1>
			<form className='contactForm' onSubmit={handleSubmit}>
				<input
					type='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					placeholder='Your Email'
					required
				/>
				<input
					type='text'
					name='subject'
					value={formData.subject}
					onChange={handleChange}
					placeholder='Subject'
					required
				/>
				<textarea
					name='message'
					value={formData.message}
					onChange={handleChange}
					placeholder='Message'
					required
				/>
				<input
					type='file'
					name='file'
					accept='.stl,.obj,.fbx,.png'
					onChange={handleChange}
				/>
				<button type='submit'>Send</button>
			</form>
		</>
	)
}

export default FormPopup
