import { takeLatest, call, put, all } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('Collections')
		const snapshot = yield collectionRef.get()
		const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
		yield put(fetchCollectionsSuccess(collectionsMap))
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message))
	}

	// dispatch(fetchCollectionsStart())
	// collectionRef.get().then((snapshot) => {
	// 	const collMap = convertCollectionsSnapshotToMap(snapshot)
	// 	dispatch(fetchCollectionsSuccess(collMap))
	// }).catch((error) => {
	// 	dispatch(fetchCollectionsFailure(error.message))
	// })
}

export function* fetchCollectionsStart() {
	yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas() {
	yield all([
		call(fetchCollectionsStart)
	])
}