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

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signUpWithGoogle = () => {
	return auth.signInWithPopup(provider)
}

export default firebase;