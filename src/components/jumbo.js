import React from 'react'
import { Jumbotron, Container} from 'reactstrap';
import Image from 'react-bootstrap/Image';
import '../css/jumbo.css';

const h3 = {
	color:"white",
	position:"absolute",
	top:"50%",
	left:"50%",
	transfrom:"translate(-50%, -50%)",
	textAlign:"center",
}

const jumbo = {
	width:"100%",
	padding:"0",


}

const img = {
	objectFit:"cover",
	maxHeight:"30vh",
	
}

const Jumbo = (props) => {
	return (
		<div>
		<Jumbotron fluid style={jumbo} >
		<Image src="img/Jumbotron_background.jpg" style={img} fluid/>
			
				<h3 style={h3}>점보트론</h3>
			
		</Jumbotron>
		</div>
	);
};

export default Jumbo;