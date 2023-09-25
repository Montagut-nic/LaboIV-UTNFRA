import { Component } from '@angular/core';
import { getAuth} from '@firebase/auth';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent {

  public usuario = auth.currentUser?.email;
  
}

const auth = getAuth();
