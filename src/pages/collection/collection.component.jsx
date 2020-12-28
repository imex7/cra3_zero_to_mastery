import React from 'react';
import './collection.styles.scss'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({collection}) => {
	const {title, items} = collection
	console.log(collection);
	return <>
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			{/* <pre>
				{JSON.stringify(collection, null, 4)}
			</pre> */}
			<div className="items">
				{
					items.map((el) => <CollectionItem key={el.id} item={el} />)
				}
			</div>
		</div>
	</>
}

const msp = (state, owned_props) => {
	return {
		collection: selectCollection(owned_props.match.params.collectionId)(state)
	}
}

export default connect(msp)(CollectionPage);