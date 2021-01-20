import { createSelector } from 'reselect';

const selectShop = (state) => {
	return state.shop
}

export const selectCollections = createSelector(
	[selectShop],
	(shop) => {
		return shop.collections
	}
) 

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	(collections) => {
		return collections ? Object.keys(collections).map((el => {
			return collections[el]
		}))
		: []
	}
) 

export const selectCollection = (collectionUrlParam) => {
	return createSelector(
		[selectCollections],
		(collections) => {
			return collections ? collections[collectionUrlParam]
			: null
		}
	)
}