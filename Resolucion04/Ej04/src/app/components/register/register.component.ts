import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, } from "firebase/firestore"
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private router: Router) { };

  public nombre: string = "";
  public email: string = "";
  public clave: string = "";

  public registrar() {
    createUserWithEmailAndPassword(auth, this.email, this.clave)
      .then((userCredential) => {
        const user = userCredential.user;
        this.guardarUser();
        this.router.navigateByUrl("/bienvenido");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }


  public guardarUser = async () => {
    await setDoc(doc(db, "usuarios", this.nombre), {
      userEmail: this.email,
      userName: this.nombre
    });
  }
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5L66TfvVphfcEGT6uK3eAXUttugg64jE",
  authDomain: "ej04-7cb06.firebaseapp.com",
  projectId: "ej04-7cb06",
  storageBucket: "ej04-7cb06.appspot.com",
  messagingSenderId: "635418366955",
  appId: "1:635418366955:web:25cd63586536b594c1ffae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);