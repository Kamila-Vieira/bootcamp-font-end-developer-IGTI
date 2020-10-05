import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = 'Uma mensagem qualquer';
  n = 12050.4983;
  hoje = new Date();
  meuCep = '30882770';
  meuCpf = '88844477723';
  strings: string[] = ['gato', 'cavalo'];

  addString(newString) {
    this.strings.push(newString);
  }
}
