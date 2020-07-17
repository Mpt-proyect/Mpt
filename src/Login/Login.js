import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from'./Firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component{
    render(){
        const { user, signOut, signInWithGoogle} = this.props;
        return (
            <div>
                {
                    user ? 
                    <h2> Bienvenido, {user.displayName}  </h2>
                    : <h1>Por favor, ingrese su correo</h1>
                }       
                {
                    user 
                    ? <button onClick={signOut}> Cerrar sesión </button>
                    : <button onClick={signInWithGoogle}> Conectar con Google</button>
                }
            </div>
        );
    }
}
const firebaseAppAuth = firebaseApp.auth();

const providers ={
    googleProvider : new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,

})(Login);