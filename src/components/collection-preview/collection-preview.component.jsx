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
					.map((el) => {
						return <CollectionItem key={el.id} item={el} />
					})
			}
		</div>
	</div>
	</>
};
