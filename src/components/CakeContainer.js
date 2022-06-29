import React from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux';

function CakeContainer(props) {

	return (
		<div>
			<h3>Number of cakes in the store - {props.numberOfCakes}</h3>
			<button onClick={props.buyCake}>Click to Buy Cake</button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		numberOfCakes: state.numberOfCakes
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: () => dispatch(buyCake())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
