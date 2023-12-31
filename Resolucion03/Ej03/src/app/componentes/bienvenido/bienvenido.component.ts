import { Component, OnInit } from '@angular/core';
import { getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { Router } from '@angular/router';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent implements OnInit {
  public nombre : string = "";
  
  constructor(private router: Router) { };

  ngOnInit(): void{
    if (auth.currentUser != null) {
      this.nombre=auth.currentUser.email? auth.currentUser.email : "";
    } else {
      this.router.navigateByUrl("/login");
    }
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