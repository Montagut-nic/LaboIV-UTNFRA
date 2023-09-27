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

  public loguear() {
    signInWithEmailAndPassword(auth, this.usuario.mail, this.usuario.clave)
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
  apiKey: "AIzaSyBx-M4xhshkazxUV_eFEX3TAaaYgR-tBnk",
  authDomain: "ej03-montagut.firebaseapp.com",
  projectId: "ej03-montagut",
  storageBucket: "ej03-montagut.appspot.com",
  messagingSenderId: "171451311356",
  appId: "1:171451311356:web:cbc256b7056b7230076379"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
