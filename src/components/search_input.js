import React from 'react';
import {InputGroup, Button,Input, InputGroupAddon} from 'reactstrap';

import SearchIcon from './SearchIcon';


const search_input = (props) => {

	const inputgrop = {
		width:"70%",
		left:"15%",
	}
	const srch = {
		
	}

	const btn = {
		backgroundColor:"white",
		color:"black",
	}
	const icon ={
		color:"black",
	}
	return (
		<InputGroup style={inputgrop}>
        	<Input style={srch}/>
        	<InputGroupAddon addonType="append">
        		<Button style={btn}>
        			<SearchIcon style={icon}/>
        		</Button>
        	</InputGroupAddon>
      	</InputGroup>
		);
}

export default search_input;