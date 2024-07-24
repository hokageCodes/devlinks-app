import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDypV6lK2QtwikGSwILNHbNwNISylKT5HY",
    authDomain: "hng-link-app.firebaseapp.com",
    projectId: "hng-link-app",
    storageBucket: "hng-link-app.appspot.com",
    messagingSenderId: "334830354649",
    appId: "1:334830354649:web:e6649984bae829946c3ec8",
    measurementId: "G-2QNHFKD011"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
