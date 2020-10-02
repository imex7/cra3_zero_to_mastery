import React from 'react';
import shop_data from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

export default class ShopPage extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			collections: shop_data 
		}
	}

	render() {
		const {collections} = this.state 
		return <>
		<div className="shop-page">
			<h2>Shop page</h2>
			{
				collections.map(({id, ...other}) => {
					return <CollectionPreview key={id} {...other} />
				})
			}
		</div>
		</>
	}
}