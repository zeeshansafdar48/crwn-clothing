import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDZUA6cidzZH7BHpL3NRaohHQzbHx3j71Y',
  authDomain: 'crwn-clothing-ebfde.firebaseapp.com',
  projectId: 'crwn-clothing-ebfde',
  storageBucket: 'crwn-clothing-ebfde.appspot.com',
  messagingSenderId: '957381188649',
  appId: '1:957381188649:web:d1a86392f02443631d9038',
  measurementId: 'G-SGN7542CVV',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const storeUserProfileDocument = async (userAuth, additionalProperties) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapShot = await userRef.get();

  if (!userSnapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalProperties,
      });
    } catch (e) {
      console.log('error:', e.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
