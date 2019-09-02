import React , {useState} from 'react';

const ProfileStatus = (props) => {
	

	let [editMode , setEditMode] = useState(false);
	let [status , setStatus] = useState('New status')

	const activateEditMode = () => {
		setEditMode(true)
	};

	const deactivateEditMode = () => {
		setEditMode(false)
	};

	const statusChanged = (e) => {
		setStatus(e.target.value)
	}

		return (
		<div>
		{!editMode ?
			<div>
				<span onDoubleClick={activateEditMode} style={{ border: '1px solid lightblue', padding: '1px 10px' , borderRadius: '2px'}} >{status}</span>	
			</div> 
			:<div>
				<input autoFocus={true} onChange={statusChanged} onBlur={deactivateEditMode} value={status} />
			</div>}
		</div>
		)
};

export default ProfileStatus