import firebase from "firebase/app";
import "firebase/firestore";
import Vue from 'vue'
import VueFire from 'vuefire'
import config from '../.firebaserc';

Vue.use(VueFire);

firebase.initializeApp({
  projectId: config.projects.default
});

export const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });