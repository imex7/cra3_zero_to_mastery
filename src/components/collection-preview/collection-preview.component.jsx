import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

export default function CollectionPreview({title, items}) {
	return <>
	<div className="collection-preview">
		<h2 className="title">{title}</h2>
		<div className="preview">
			{
				items
					.filter((el, index) => {
						return index < 4
					})
					.map(({id, ...other}) => {
						return <CollectionItem key={id} {...other} />
					})
			}
		</div>
	</div>
	</>
};
