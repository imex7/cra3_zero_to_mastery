import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({sections}) => {
		return <>
			<div className="directory-menu">
				{
					sections.map(({id, ...otherProps}) => {
						return <MenuItem key={id} {...otherProps} />
					})
				}
			</div>
		</>
}

const msp = createStructuredSelector({
	sections: selectDirectorySections
})

export default connect(msp)(Directory);