import { Component } from '@angular/core';
import { getAuth} from '@firebase/auth';
import { initializeApp } from "firebase/app";
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent {

  public usuario = auth.currentUser?.email;
  
}

const firebaseConfig = {
  apiKey: "AIzaSyBx-M4xhshkazxUV_eFEX3TAaaYgR-tBnk",
  authDomain: "ej03-montagut.firebaseapp.com",
  projectId: "ej03-montagut",
  storageBucket: "ej03-montagut.appspot.com",
  messagingSenderId: "171451311356",
  appId: "1:171451311356:web:cbc256b7056b7230076379"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
