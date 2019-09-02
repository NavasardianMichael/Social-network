import React from 'react';

class ProfileStatus extends React.Component {
	
	constructor(props) {
		super(props);
		this.refToInput = React.createRef();
	}

	state = {
		editMode: false,
		status: 'New status'
	};

	statusChanged = () => {
		this.setState({
			status: this.refToInput.current.value
		})
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		});
	};

	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
	};

	render() {
		return (
		<div>
		{!this.state.editMode ?
			<div>
				<span style={{border: '1px solid lightblue', padding: '1px' , cursor: 'auto' , borderRadius: '2px'}} onDoubleClick={this.activateEditMode} >{this.state.status}</span>	
			</div> 
			:<div>
				<input ref={this.refToInput} autoFocus={true} onChange={this.statusChanged} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status} />
			</div>}
		</div>
		)
	}
};

export default ProfileStatus