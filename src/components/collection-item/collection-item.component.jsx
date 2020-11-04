import React from 'react';
import './collection-item.style.scss'
import { CustomButton } from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

function CollectionItem({item, addItem}) {
	const {name, price, imageUrl} = item
	return <>
		<div className="collection-item">
			<div className="image" style={{backgroundImage: `url(${imageUrl})`}}></div>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton caption="Add to cart" inverted
				onClick={() => {addItem(item)}}
			/>
		</div>
	</>
};

const mdp = (dispatch) => {
	return {
		addItem: (item) => {
			return dispatch(addItem(item))
		}
	}
}

export default connect(null, mdp)(CollectionItem)
