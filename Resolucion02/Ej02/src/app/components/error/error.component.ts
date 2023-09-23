import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  constructor(private router: Router) { };

  public volver(){
    this.router.navigateByUrl("/login");
  }
}
