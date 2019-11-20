import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyBDsxQ6-8Lu8DGHBWQbgII7EddLs5inpo4",
  authDomain: "vue-firebase-tutorial-e3558.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-e3558.firebaseio.com",
  projectId: "vue-firebase-tutorial-e3558",
  storageBucket: "vue-firebase-tutorial-e3558.appspot.com",
  messagingSenderId: "846506298136",
  appId: "1:846506298136:web:5bbdd0abf3f121bd182c6d",
  measurementId: "G-SV7RC5EB5W"
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
