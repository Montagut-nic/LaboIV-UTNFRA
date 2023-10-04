import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, } from "firebase/firestore"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) { };

  public nombre : string = "";
  public clave : string = "";

  
  public loguear(mail : string) {

    signInWithEmailAndPassword(auth, mail, this.clave)
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

  public buscarUser =  async () => {
    const docRef = await getDocs(collection(db, "usuarios"));
    try {
      docRef.forEach((doc) => {
        if (doc.get("userName") == this.nombre) {
          this.loguear(doc.get("userEmail"));
        }
      });
    }
    catch (err) {
      console.log(err);
    }
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