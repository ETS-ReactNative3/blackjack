import firebase from '@react-native-firebase/app'
import firebaseAuth from '@react-native-firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBa9uVv5ApsvczeHaEi30Y70oDV4O-XvNU",
  authDomain: "blackjack-e933f.firebaseapp.com",
  databaseURL: "https://blackjack-e933f.firebaseio.com",
  projectId: "blackjack-e933f",
  storageBucket: "blackjack-e933f.appspot.com",
  messagingSenderId: "27174392860",
  appId: "1:27174392860:web:47fda0a0a2b99b18827bd9",
  measurementId: "G-9XKZNB2LX2"
}

firebase.initializeApp(firebaseConfig)

export async function login(email, password) {
  return firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .then(() => true)
    .catch(error => {
      notification.warning({
        message: error.code,
        description: error.message,
      })
    })
}

export async function register(email, password, name) {
  return firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then(response => {
      if (response.user) {
        const { uid } = response.user
        firebaseDatabase
          .ref('users')
          .child(uid)
          .set({
            role: 'admin',
            name,
          })
      }
      return true
    })
    .catch(error => {
      notification.warning({
        message: error.code,
        description: error.message,
      })
    })
}

export async function currentAccount() {
  let userLoaded = false
  function getCurrentUser(auth) {
    return new Promise((resolve, reject) => {
      if (userLoaded) {
        resolve(firebaseAuth.currentUser)
      }
      const unsubscribe = auth.onAuthStateChanged(user => {
        userLoaded = true
        unsubscribe()
        const getUserData = async () => {
          if (user) {
            const userFields = await firebaseDatabase
              .ref('users')
              .child(user.uid)
              .once('value')
              .then(snapshot => {
                return snapshot.val()
              })
            const mergedUser = Object.assign(user, {
              id: user.uid,
              name: userFields.name,
              role: userFields.role,
              avatar: user.photoUrl,
            })
            return mergedUser
          }
          return user
        }
        resolve(getUserData())
      }, reject)
    })
  }
  return getCurrentUser(firebaseAuth)
}

export async function logout() {
  return firebaseAuth.signOut().then(() => true)
}
