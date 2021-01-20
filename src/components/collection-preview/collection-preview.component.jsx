import React from 'react';
import {Link} from "react-router-dom"
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

export default function CollectionPreview({title, items}) {
	return <>
	<div className="collection-preview">
		<Link to={`/shop/${title.toLowerCase()}`}><h2 className="title">{title}</h2></Link>
		<div className="items">
			{
				items
					.filter((el, index) => {
						return index < 4
					})
					.map((el) => {
						return <CollectionItem key={el.id} item={el} />
					})
			}
		</div>
	</div>
	</>
};
