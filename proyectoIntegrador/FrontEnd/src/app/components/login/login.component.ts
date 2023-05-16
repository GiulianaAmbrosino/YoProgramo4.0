import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor() { }

  login() {
    // Aquí puedes agregar la lógica de inicio de sesión
    console.log('Iniciar sesión con los siguientes datos:');
    console.log('Nombre de usuario:', this.username);
    console.log('Contraseña:', this.password);
  }
}