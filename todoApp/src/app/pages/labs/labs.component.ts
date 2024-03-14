import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css'],
})
export class LabsComponent {
  title = 'todo-app';
  welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = signal([
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio',
  ]);
  name = signal('Pablo')
  age = 22
  disabled = true
  img = 'https://w3schools.com/howto/img_avatar.png';


  person = {
    name: 'Pablo',
    age: 22,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  clickHandler() {
    alert('Hola que tal')
    
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue)
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value)
  }

 mostrar(){
   let titulo = document.getElementById('titulo')
   if (titulo) {
    titulo.innerHTML += '<br/> Buenas tardes por la mañana';
} else {
    console.log("No se encontró el elemento con la ID 'titulo'");
}
 }
}