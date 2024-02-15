import { useState } from 'react'

function FormPopup() {
	const { formData, setFormData } = (useState = {
		email: '',
		subject: '',
		description: '',
		file: null,
	})

	return (
		<div className='popUpWrapper'>
			<div className='popUp'></div>
		</div>
	)
}

export default FormPopup
