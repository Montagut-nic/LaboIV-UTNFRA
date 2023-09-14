import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nicolas Montagut - Ej01';
  public btnCalcular: string = "Calcular";
  public btnLimpiar: string = "Limpiar cuadros de textos";
  public edadUno: any = "";
  public edadDos: any = "";
  public promedio: any = "";
  public suma: any = "";

  public Calcular(): void
  {
    this.Sumar();
    this.Promediar();
  }

  public Sumar(): void
  {
    this.suma = parseInt(this.edadDos) + parseInt(this.edadUno);
  }

  public Promediar(): void
  {
    this.promedio = (parseInt(this.edadDos) + parseInt(this.edadUno)) / 2;
  }

  public Limpiar(): void
  {
    this.edadDos = "";
    this.edadUno = "";
    this.suma = "";
    this.promedio = "";
  }

}
