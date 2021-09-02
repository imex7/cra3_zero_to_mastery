import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyA-yaV_Sxnse4uVttTHPVXC1EDhfUUZ998",
	authDomain: "cra-zero-to-mastery.firebaseapp.com",
	databaseURL: "https://cra-zero-to-mastery.firebaseio.com",
	projectId: "cra-zero-to-mastery",
	storageBucket: "cra-zero-to-mastery.appspot.com",
	messagingSenderId: "262977821109",
	appId: "1:262977821109:web:0e0e239836146475d821fc"
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const ref = firestore.doc(`users/${userAuth.uid}`)
	const snapshot = await ref.get()
	if (!snapshot.exists) {
		const {displayName, email} = userAuth
		const createdAt = new Date()
		try {
			await ref.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log(`Ошибка создания пользователя >>>`, error.message);
		}
	}
	return ref
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	// const collRef = firestore.collection(collectionKey)
	// const batch = firestore.batch()
	// objectsToAdd.forEach((el) => {
	// 	const newDocRef = collRef.doc()
	// 	console.log(newDocRef.id);
	// 	batch.set(newDocRef, el)
	// })

	// let b = await batch.commit()
	// return b
}

export const convertCollectionsSnapshotToMap = (colls) => {
	// console.log(colls);
	const transformedColl = colls.docs.map((el) => {
		const { title, items } = el.data()
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: el.id,
			title,
			items
		}
	})
	console.log(transformedColl)
	const tc = transformedColl.reduce((accum, coll) => {
		accum[coll.title.toLowerCase()] = coll
		return accum
	}, {})
	console.log(tc);
	return tc
}

export const getCurrentUser = () => {
	return new Promise((res, rej) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe()
			res(userAuth)
		}, rej)
	})
}

export const auth = firebase.auth()
auth.languageCode = 'ua'

export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => {
	return firebase.auth().signInWithPopup(googleProvider)
}

export default firebase;