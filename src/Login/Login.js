import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from'./Firebase';
import Paper from '@material-ui/core/Paper';
import intro_niño from '../imgs/intro_niño.jpg';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component{
    render(){
        const { user, signOut, signInWithGoogle} = this.props;
        return (
            <Paper >
                <div>
                {
                    user ? 
                    <h2> Bienvenido, {user.displayName}  </h2>
                    : <u><h1>Inicie sesión con su cuenta Google</h1></u>
                }       
                {
                    user 
                    ? <button onClick={signOut}> &nbsp; Cerrar sesión &nbsp; </button>
                    : <button onClick={signInWithGoogle}>&nbsp; <strong>Conectar con Google</strong> &nbsp;</button> 
                    
                }<br></br> <br></br>
                      <a href="http://localhost:3001" target="_blank">&nbsp;&nbsp;<strong>Soy tutor/a&nbsp;&nbsp; </strong></a> 
<br></br> <br></br>
                <img src={intro_niño} width="50%"  />
                
            </div><br></br>
            </Paper>
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