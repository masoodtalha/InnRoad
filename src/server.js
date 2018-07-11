import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCklDhW9V3RMUkEDnBN6YKuVEVSX6ZcNUk",
  authDomain: "manage-goal.firebaseapp.com",
  databaseURL: "https://manage-goal.firebaseio.com",
  projectId: "manage-goal",
  storageBucket: "",
  messagingSenderId: "286476767856"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
