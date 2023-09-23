import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) { };

  public usuario: Usuario = new Usuario();

  public logear() {
    signInWithEmailAndPassword(auth, this.usuario.nombre, this.usuario.clave)
      .then((userCredential) => {
        const user = userCredential.user;
        this.router.navigateByUrl("/bienvenido");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.router.navigateByUrl("/error");
      });
  }

}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuAWCppyIDj6mcRpji5g4ynQTTEpEJvg4",
  authDomain: "ej02-df65f.firebaseapp.com",
  projectId: "ej02-df65f",
  storageBucket: "ej02-df65f.appspot.com",
  messagingSenderId: "178190849043",
  appId: "1:178190849043:web:00a46e24133322f61f5be6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);