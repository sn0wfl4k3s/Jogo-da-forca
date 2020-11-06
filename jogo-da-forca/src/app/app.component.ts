import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  palavraEscolhida = 'cogumelo'.split('');
  palavrasSelecionadas: Array<string> = [];
  tentativa: string;

  seJaFoiSelecionado(letra: string): boolean {
    return this.palavrasSelecionadas.some(p => p === letra.toUpperCase());
  }

  selecionarPalavra(letra: string): void {
    this.palavrasSelecionadas.push(letra);
  }

}
