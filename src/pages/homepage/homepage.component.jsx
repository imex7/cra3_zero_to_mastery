import React from 'react';
// import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component';
import {HomePageConatainer} from "./homepage.styles"

export default ({history})	=> (
	// <div className="homepage">
	// </div>
	<HomePageConatainer>
		<Directory />
	</HomePageConatainer>
)
