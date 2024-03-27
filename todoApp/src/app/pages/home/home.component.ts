import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  tasks = signal([
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio',
  ]);

  changeHandler(event: Event): void {
    const input = event.target as HTMLInputElement;
    const newTasks = input.value;
    this.tasks.update((tasks) => [...tasks, newTasks]);
    input.value="";
  }
}
