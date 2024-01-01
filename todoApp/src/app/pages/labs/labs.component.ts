import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css'],
})
export class LabsComponent {
  title = 'todo-app';
  welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio',
  ];
}
