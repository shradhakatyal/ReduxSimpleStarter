import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
	}
	onInputChange(event) {
		this.setState({term: event.target.value});
	}

	render() {
		return (
			<input onChange={event => this.onInputChange(event)}/>
		);
	}
}

export default SearchBar;