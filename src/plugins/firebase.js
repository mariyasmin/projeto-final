import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAh9L9wC7JLgO9KoNn6GmedSgClQ5y1shs",
    authDomain: "todo-list-vue-d1397.firebaseapp.com",
    projectId: "todo-list-vue-d1397",
    storageBucket: "todo-list-vue-d1397.appspot.com",
    messagingSenderId: "250333362722",
    appId: "1:250333362722:web:48f00a6b0785cd79dee87b"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection
}
