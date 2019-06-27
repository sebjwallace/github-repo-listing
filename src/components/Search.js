import React, { Component } from 'react';
import { IoIosSearch } from "react-icons/io";
import './Search.scss';

const USER = 'user';
const ORG = 'organisation';

const TYPES = {
	user: [
		'all',
		'owner',
		'member'
	],
	organisation: [
		'all',
		'forks',
		'sources',
		'member'
	]
};

const SORT = [
	'created',
	'updated',
	'pushed',
	'full_name'
]

class Search extends Component {

	constructor(props) {

		super(props);

		this.state = {
			userType: USER,
			userName: '',
			type: TYPES[USER][0],
			sort: SORT[0]
		};

	}

	handleUserNameChange = ({target: { value }}) => {
		this.setState({userName: value});
	}

	handleUserTypeChange = ({target: { value }}) => {
		this.setState({userType: value});
	}

	handleRepoTypeChange = ({target: { value }}) => {
		this.setState({type: value});
	}

	handleSortChange = ({target: { value }}) => {
		this.setState({sort: value});
	}

	handleSubmit = event => {
		event.preventDefault();
		const { onSubmit } = this.props;
		onSubmit && onSubmit(event);
	}

	render(){

		const { userName, userType, type: defaultType, sort: defaultSort } = this.state;
		const types = TYPES[userType];

		return <form className="Search" onSubmit={this.handleSubmit}>
			<select defaultValue={userType} onChange={this.handleUserTypeChange}>
				<option value={USER}>{USER}</option>
				<option value={ORG}>{ORG}</option>
			</select>
			<input
				type="text"
				placeholder="enter a github username"
				onChange={this.handleUserNameChange}
			/>
			<select disabled={!userName} defaultValue={defaultType} onChange={this.handleRepoTypeChange}>
				{types.map(type => <option key={type} value={type}>
					{type}
				</option>)}
			</select>
			<select disabled={!userName} defaultValue={defaultSort} onChange={this.handleSortChange}>
				{SORT.map(sort => <option key={sort} value={sort}>
					{sort.replace(/\_/g,' ')}
				</option>)}
			</select>
			<button disabled={!userName}>
				<IoIosSearch />
			</button>
		</form>

	}

}

export default Search;