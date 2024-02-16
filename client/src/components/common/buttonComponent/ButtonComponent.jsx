import Popup from 'reactjs-popup'
import FormPopup from '../../FormPopup/FormPopup'
import 'reactjs-popup/dist/index.css'

function Button({ title, type, code }) {
	return (
		<Popup trigger={<button className={type}>{title}</button>} modal nested>
			{(close) => (
				<div className='modal'>
					<button className='close' onClick={close}>
						&times;
					</button>
					<FormPopup service={code} />
				</div>
			)}
		</Popup>
	)
}

export default Button
