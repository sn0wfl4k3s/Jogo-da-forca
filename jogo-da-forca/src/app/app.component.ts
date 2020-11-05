import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  palavrasSelecionadas: Array<string> = [];
  palavraEscolhida = 'cogumelo'.split('');

  seJaFoiSelecionado(letra: string): boolean {
    return this.palavrasSelecionadas.some(p => p === letra);
  }

  selecionarPalavra(letra: string): void {
    this.palavrasSelecionadas.push(letra);
  }




}
