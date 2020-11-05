import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  alfabeto = 'ABCDEFGHIJLMNOPQRSTUVXZ'.split('');
  letrasSelecionadas: Array<string> = [];

  palavraDaPartida = 'cogumelo';


  seJaFoiSelecionada(letra: string): boolean {
    return this.letrasSelecionadas.some(l => l === letra);
  }

  selecionarLetra(letra: string): void {
    this.letrasSelecionadas.push(letra);
  }
}
