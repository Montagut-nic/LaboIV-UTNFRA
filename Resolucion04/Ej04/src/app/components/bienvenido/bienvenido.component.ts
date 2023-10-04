import { Component, OnInit } from '@angular/core';
import { getAuth, signOut } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { Router } from '@angular/router';
import { getFirestore, collection, getDocs, } from "firebase/firestore"
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent implements OnInit {

  constructor(private router: Router) { };

  public nombre: string = "";

  ngOnInit(): void {
    if (auth.currentUser != null) {
      this.saludar(auth.currentUser.email);
    } else {
      this.router.navigateByUrl("/login");
    }
  }

  public saludar = async (email: any) => {
    const docRef = await getDocs(collection(db, "usuarios"));
    try {
      docRef.forEach((doc) => {
        if (doc.get("userEmail") == email) {
          this.nombre = doc.get("userName");
        }
      });
    }
    catch (err) {
      console.log(err);
    }
  }
  public salir() {
    signOut(auth).then(() => {
      this.router.navigateByUrl("/login");
    }).catch((error) => {
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
