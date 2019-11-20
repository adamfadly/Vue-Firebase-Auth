<template>
    <div class="sign-up">
        <p>let's create a new !</p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="signUp">Sign Up</button>
        <span>or go back to <router-link to="/login">Login</router-link>.</span>
    </div>    
</template> 

<script>
import firebase from 'firebase';

export default {
    name: 'SignUp',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signUp: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then (
                function () {
                    alert('your account has been created!')
                },
                function (err) {
                    alert('Oops' + err.message)
                }
            );
        }
    }
}
</script>

<style scooped>

    .signUp {
        margin-top: 40px;
    }

    input{
        margin: 10px 0;
        width: 10%;
        cursor: pointer;
    }

    button {
        margin-top: 10px;
        width: 10%;
        font-size: 11px;
    }

</style>